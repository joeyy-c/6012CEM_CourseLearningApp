import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { IconButton, IconLabel, LineDivider, IconLabelButton } from "../components";
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import { TextInput } from 'react-native-gesture-handler';


const Settings = () => {
    const navigation = useNavigation();

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
					<Text style={{ ...FONTS.h2 }}>Settings</Text>
				</View>
			</View>
		)
	}

    function renderSettingsItem(icon, label) {
        return (
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}
            >
                <IconLabel 
                    icon={icon}
                    label={label}
                    iconStyle={{
                        width: 18,
                        height: 18,
                        tintColor: COLORS.gray50
                    }}
                    labelStyle={{
                        ...FONTS.body3,
                        color: COLORS.black,
                        marginLeft: 10
                    }}
                />

                <IconButton 
                    icon={icons.right_arrow}
                    iconStyle={{
                        width: 14,
                        height: 14,
                        tintColor: COLORS.gray20
                    }}
                />
            </View>
        )
    }

    function renderLineDivider() {
        return (
            <LineDivider 
                lineStyle={{
                    marginVertical: 22
                }}
            />
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            {/* Header */}
            {renderHeader()}

            {/* Settings */}
            <View
                style={{
                    borderWidth: 1,
                    borderColor: COLORS.gray10,
                    borderRadius: SIZES.radius,
                    margin: SIZES.padding,
                    paddingVertical: SIZES.padding,
                    paddingHorizontal: 20
                }}
            >
                {renderSettingsItem(icons.notification, "Notifications")}
                {renderLineDivider()}
                {renderSettingsItem(icons.faq, "FAQs")}
                {renderLineDivider()}
                {renderSettingsItem(icons.help_centre, "Help Center")}
                {renderLineDivider()}
                {renderSettingsItem(icons.privacy, "Privacy")}
            </View>

            <IconLabelButton 
                icon={icons.logout}
                label={'Logout'}
                containerStyle={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderWidth: 1,
                    borderColor: COLORS.secondary,
                    borderRadius: 50,
                    margin: SIZES.padding,
                    paddingVertical: 18,
                    marginBottom: 100,
                }}
                iconStyle={{
                    width: 16,
                    height: 16,
                    tintColor: COLORS.secondary
                }}
                labelStyle={{
                    marginLeft: 3,
                    color: COLORS.secondary
                }}
                onPress={() => navigation.navigate("Register")}
            />
           
        </View>
    )
}

export default Settings;