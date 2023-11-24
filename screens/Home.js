import React, { useState, useEffect } from 'react';
// import * as Font from 'expo-font';
import { View, Text, ImageBackground, Image, ScrollView, _View, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Shadow } from "react-native-shadow-2";
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { IconButton, TextButton, LineDivier, HorizontalCourseCard, CategoryCard, VerticalCourseCard } from "../components";
import { COLORS, FONTS, SIZES, icons, images, dummyData } from '../constants';
// import useFonts from './hooks/useFonts.js';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();

const Section = ({containerStyle, title, onPress, children}) => {
	return (
		<View
			style={{
				...containerStyle
			}}
		>
			<View
				style={{
					flexDirection: 'row',
					paddingHorizontal: SIZES.padding
				}}
			>
				<Text
					style={{
						flex: 1,
						...FONTS.h2
					}}
				>
					{title}
				</Text>

				<TextButton
					contentContainerStyle={{
						width: 80,
						borderRadius: 30,
						backgroundColor: COLORS.primary
					}}
					label="See All"
					onPress={onPress}
				/>
			</View>

			{children}
		</View>
	)
}

const Home = () => {

	const [fontsLoaded, fontError] = useFonts({
		'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
		'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
	  });
	
	const onLayoutRootView = async () => {
		if (fontsLoaded || fontError) {
			await SplashScreen.hideAsync();
		}
	};

	const navigation = useNavigation();
	
	useEffect(() => {
		onLayoutRootView();
	}, [fontsLoaded, fontError]);

	if (fontError) {
		console.error('Error loading fonts:', fontError);
		return null;
	}

	if (!fontsLoaded) {
		return null; 
	}

	function renderSearchBar() {
		return (
			<TouchableOpacity 
				onPress={() => navigation.navigate('Search')}
				style={{
					flexDirection: 'row',
					marginTop: 20,
					marginBottom: 10,
					paddingHorizontal: SIZES.padding,
					alignItems: 'center'
				}}
			>
				<View
					style={{
						flex: 1,
						flexDirection: 'row',
						alignItems: 'center',
						width: "100%",
						height: 50,
						borderRadius: SIZES.radius,
						paddingHorizontal: SIZES.padding,
						backgroundColor: COLORS.additionalColor9,
						...FONTS.body3
					}}
				>

					<Image 
						source={icons.search}
						style={{
							width: 15,
							height: 15,
							tintColor: COLORS.gray40,
							marginRight: SIZES.radius
						}}
					/>
					
					<Text
						style={{
							color: COLORS.gray40,
							...FONTS.body3,
						}}
						>
						Search ...
					</Text>
				</View>
			</TouchableOpacity>
		)
	}

	function renderHeader() {
		return (
			<View style={{
				flexDirection: 'row',
				marginTop: 60,
				marginBottom: 10,
				paddingHorizontal: SIZES.padding,
				alignItems: 'center'
			}}>

				{/* Greetings */}
				<View style={{
					flex: 1
				}}>
					<Text style={{ ...FONTS.h2 }}>Hello, Superman!</Text>
					<Text style={{
						color: COLORS.gray50,
						...FONTS.body3
					}}>
						Thursday, 23th Nov 2023
					</Text>
				</View>

				{/* Profile Logo */}
				<IconButton
					icon={icons.profile}
					iconStyle={{
						tintColor: COLORS.black
					}}
				/>
			</View>
		)
	}

	function renderStartLearning() {
		return (
			<ImageBackground
				source={images.featured_bg_image}
				style={{
					alignItems: 'flex-start',
					marginTop: SIZES.padding,
					marginHorizontal: SIZES.padding,
					padding: 15
				}}
				imageStyle={{
					borderRadius: SIZES.radius
				}}
			>
				{/* Info */}
				<View>
					<Text
						style={{
							color: COLORS.white,
							...FONTS.body2
						}}
					>
						HOW TO
					</Text>

					<Text
						style={{
							color: COLORS.white,
							...FONTS.h2
						}}
					>
						Make your brand more visible with out checklist
					</Text>

					<Text
						style={{
							marginTop: SIZES.radius,
							color: Colors.white,
							...FONTS.body4
						}}
					>
						By Scott Harris
					</Text>
				</View>

				{/* Image */}
				<Image
					source={images.start_learning}
					style={{
						width: "100%",
						height: 120,
						marginTop: SIZES.padding
					}}
				/>

				{/* Button */}
				<TextButton
					label="Start Learning"
					contentContainerStyle={{
						height: 40,
						paddingHorizontal: SIZES.padding,
						borderRadius: 20,
						backgroundColor: COLORS.white
					}}
					labelStyle={{
						color: COLORS.black
					}}
				/>
			</ImageBackground>
		)
	}

	function renderCourses() {
		return (
			<FlatList
				horizontal
				data={dummyData.courses_list_1}
				listKey="Courses"
				keyExtractor={item => `Courses-${item.id}`}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{
					marginTop: SIZES.padding
				}}
				renderItem={ ({item, index}) => (
					<HorizontalCourseCard 
						containerStyle={{
							marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
							marginRight: index == dummyData.courses_list_1.length - 1 ? SIZES.padding : 0
						}}
						course={item}
					/>
				)}
			/>
		)
	}

	function renderCategories() {
		return (
			<Section
				title="Categories"
			>
				<FlatList
					horizontal
					data={dummyData.categories}
					listKey="Categories"
					keyExtractor={item => `Categories-${item.id}`}
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={{
						marginTop: SIZES.radius
					}}
					renderItem={({item, index}) => (
						<CategoryCard 
							category={item}
							containerStyle={{
								marginLeft: index == 0 ? SIZES.padding : SIZES.base,
								marginRight: index == dummyData.categories.length - 1 ? SIZES.padding : 0
							}}
						/>
					)}
				/>
			</Section>
		)
	}

	function renderPopularCourses() {
		return (
			<Section
				title="Popular Courses"
				containerStyle={{
					marginTop: 30
				}}
			>
			<FlatList
				data={dummyData.courses_list_2}
				listkey="PopularCourses"
				scrollEnabled={false}
				keyExtractor={item => `PopularCourses-${item.id}`}
				contentContainerStyle={{
					marginTop: SIZES.padding,
					paddingHorizontal: SIZES.padding
				}}
				renderItem={({item, index}) => (
					<VerticalCourseCard
						course={item}
						containerStyle={{
							marginVertical: SIZES.padding,
							marginTop: index == 0 ? SIZES.radius : SIZES.padding
						}}
					/>
				)}
				ItemSeparatorComponent={() => (
					<LineDivier
						lineStyle={{
							backgroundColor: COLORS.gray20
						}}
					/>
				)}
			/>
			</Section>
		)
	}

	return (
		<View style={{
			flex: 1,
			backgroundColor: COLORS.white
		}}>

			{/* Header */}
			{renderHeader()}

			{/* Content */}
			<ScrollView
				contentContainerStyle={{
					paddingBottom: 150
				}}
				showsVerticalScrollIndicator={false}
			>
			
				{/* Search Bar */}
				{renderSearchBar()}

				{/* Start Learning */}
				{renderStartLearning()}

				{/* Courses */}
				{renderCourses()}

				<LineDivier 
					lineStyle={{
						marginHorizontal: SIZES.padding,
						marginVertical: SIZES.padding
					}}
				/>

				{/* Categories */}
				{renderCategories()}

				{/* Popular Courses */}
				{renderPopularCourses()}
			</ScrollView>
		</View>
	)
}

export default Home;