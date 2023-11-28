import React, { useState } from 'react';
import { View, Text, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { TextButton, IconButton } from "../components";
import { COLORS, FONTS, SIZES, icons, images, dummyData } from '../constants';
import { TextInput } from 'react-native-gesture-handler';


const EditProfile = () => {
    const navigation = useNavigation();
    const [inputValue, setInputValue] = useState('');

    function backHandler() {
        navigation.goBack();
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
                <IconButton
                    icon={icons.back}
                    iconStyle={{
                        tintColor: COLORS.black,
                        width: 25
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

				<View style={{
					flex: 1
				}}>
					<Text style={{ ...FONTS.h2 }}>Edit Profile</Text>
				</View>
			</View>
		)
	}

    function renderInput(icon, label, value, isPassword) {
		return (
			<View 
				style={{
					marginBottom: 12,
                    paddingHorizontal: SIZES.radius,
				}}
			>
                <Text 
                    style={{ 
                        ...FONTS.body3, 
                        color: COLORS.gray60, 
                        marginTop: SIZES.base,
                        marginBottom: 6 ,
                        marginLeft: SIZES.base,
                        color: COLORS.black
                    }}
                >
                    {label}
                </Text>
				<View
					style={{
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
							tintColor: COLORS.gray60,
							marginRight: SIZES.radius
						}}
					/>
					
					<TextInput 
                        style={{
                            width: "100%",
						    height: 50,
                            color: COLORS.gray60
                        }}
                        value={value}
                        onChangeText={(text) => setInputValue(text)}
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
                backgroundColor: COLORS.white,
            }}
        >

            {/* Header */}
            {renderHeader()}

            <View
                style={{
                    paddingHorizontal: SIZES.padding,
                    alignItems: "center",
                }}
            >
                <Image 
                    source={images.register}
                    style={{
                        width: 250,
                        height: 250,
                        marginRight: SIZES.radius,
                        marginBottom: SIZES.radius
                    }}
                />
                
                {renderInput(icons.profile, "Name", dummyData?.course_details?.instructor?.name)}
                {renderInput(icons.mail, "E-mail", dummyData?.course_details?.instructor?.email)}
                {renderInput(icons.expert, "Job Position / Expertise", dummyData?.course_details?.instructor?.title)}

                <TextButton
                    contentContainerStyle={{
                        width: "100%",
                        height: 50,
                        borderRadius: 25,
                        marginTop: 40,
                        backgroundColor: COLORS.primary
                    }}
                    label="Save Changes"
                />
            </View>
			
        </KeyboardAvoidingView>
    )
}

export default EditProfile;