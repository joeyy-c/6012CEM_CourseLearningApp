import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

import { FONTS, SIZES, COLORS, icons, dummyData } from "../constants";
import { CategoryCard, IconButton } from "../components";

const Search = () => {
    const navigation = useNavigation();

    function backHandler() {
        navigation.goBack();
    }

	function renderSearchBar() {
		return (
			<View 
				style={{
					flexDirection: 'row',
					marginTop: 20,
					marginBottom: 10,
					paddingHorizontal: SIZES.padding,
					alignItems: 'center'
				}}
			>
                <IconButton
                    icon={icons.back}
                    iconStyle={{
                        tintColor: COLORS.black,
                        width: 18
                    }}
                    containerStyle={{
                        alignItems: "center",
                        justifyContent: "center",
                        paddingRight: SIZES.radius
                    }}
                    onPress={() => {
                        backHandler()
                    }}
                />

				<View
					style={{
						flex: 1,
						flexDirection: 'row',
						alignItems: 'center',
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
					
					<TextInput 
						placeholder="Search ..."
                        style={{
                            width: "100%",
						    height: 50
                        }}
                        returnKeyType="done"
                        onSubmitEditing={() => navigation.navigate('CourseListing', { category: dummyData.categories[2] })}
					/>
				</View>
			</View>
		)
	}

    function renderBrowseCategories() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >
                <Text
                    style={{
                        marginHorizontal: SIZES.padding,
                        ...FONTS.h2
                    }}
                >
                    Browse Categories
                </Text>

                <FlatList 
                    data={dummyData.categories}
                    numColumns={2}
                    scrollEnabled={false}
                    listKey="BrowseCategories"
                    keyExtractor={item => `BrowseCategories-${item.id}`}
                    contentContainerStyle={{
                        marginTop: SIZES.radius
                    }}
                    renderItem={({item, index}) => (
                        <CategoryCard
                            category={item}
                            containerStyle={{
                                height: 130,
                                width: (SIZES.width - (SIZES.padding *2) - SIZES.radius) / 2,
                                marginTop: SIZES.radius,
                                marginLeft: (index + 1) % 2 == 0 ? SIZES.radius : SIZES.padding
                            }}
                            onPress={() => navigation.navigate('CourseListing', { category: item })}
                        />
                    )}
                />
            </View>
        )
    }

    return (
        <View
            style={{
                paddingTop: 50,
                backgroundColor: COLORS.white
            }}
        >
            {/* Search Bar */}
            {renderSearchBar()}

            {/* Browse Categories */}
            {renderBrowseCategories()}
        </View>
    )
}

export default Search;