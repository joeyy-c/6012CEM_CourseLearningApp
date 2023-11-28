import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { TextButton } from "../components";
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import { TextInput } from 'react-native-gesture-handler';


const Register = () => {
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
				Sign Up
			</Text>

			<Image 
				source={images.register}
				style={{
					width: 250,
					height: 250,
					marginRight: SIZES.radius,
					marginBottom: SIZES.radius
				}}
			/>

			{renderInput(icons.profile, "Name")}
			{renderInput(icons.mail, "E-mail")}
			{renderInput(icons.padlock, "Password", true)}
			{renderInput(icons.padlock, "Confirm Password", true)}
			{renderInput(icons.expert, "Job Position / Expertise")}

			
			<Text
				style={{
					// paddingTop: SIZES.base
				}}
			>
				Already have an account? 
				<TouchableOpacity onPress={() => navigation.navigate('Login')}>
					<Text style={{ color: 'blue'}}>Login</Text>
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
				label="Register"
				onPress={() => navigation.navigate('Login')}
			/>
			
        </KeyboardAvoidingView>
    )
}

export default Register;