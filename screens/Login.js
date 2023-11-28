import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { TextButton } from "../components";
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import { TextInput } from 'react-native-gesture-handler';


const Login = () => {
    const navigation = useNavigation();

    function renderInput(icon, label, isPassword) {
		return (
			<View 
				style={{
					flexDirection: 'row',
					marginBottom: 12,
					alignItems: 'center'
				}}
			>
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
						source={icon}
						style={{
							width: 15,
							height: 15,
							tintColor: COLORS.gray40,
							marginRight: SIZES.radius
						}}
					/>
					
					<TextInput 
						placeholder={label}
                        style={{
                            width: "100%",
						    height: 50
                        }}
						secureTextEntry={isPassword}
                        // returnKeyType="done"
					/>
				</View>
			</View>
		)
	}

    return (
        <KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
                backgroundColor: COLORS.white,
				paddingHorizontal: SIZES.padding
            }}
        >
			<Text
				style={{
					...FONTS.h1,
					paddingBottom: SIZES.padding
				}}
			>
				Welcome Back, {`\n`}Knowledge Seeker!
			</Text>

			<Image 
				source={images.login}
				style={{
					width: 250,
					height: 250,
					marginRight: SIZES.radius,
					marginBottom: SIZES.radius
				}}
			/>

			{renderInput(icons.mail, "E-mail")}
			{renderInput(icons.padlock, "Password", true)}
			
			<Text
				style={{
					// paddingTop: SIZES.base
				}}
			>
				Don't have an account? 
				<TouchableOpacity onPress={() => navigation.navigate('Register')}>
					<Text style={{ color: 'blue'}}>Register</Text>
				</TouchableOpacity>
			</Text>

			<TextButton
				contentContainerStyle={{
					width: "100%",
					height: 50,
					borderRadius: 25,
					marginTop: 40,
					backgroundColor: COLORS.primary
				}}
				label="Login"
				onPress={() => navigation.navigate('Home')}
			/>
			
        </KeyboardAvoidingView>
    )
}

export default Login;