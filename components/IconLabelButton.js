import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

import { FONTS, SIZES } from "../constants";


const IconLabelButton = ({ containerStyle, icon, iconStyle, label, labelStyle, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: SIZES.base,
                paddingHorizontal: SIZES.radius,
                ...containerStyle
            }}
            onPress={onPress}
        >
            <Image 
                source={icon}
                resizeMode="contain"
                style={{
                    width: 20,
                    height: 20,
                    ...iconStyle
                }}
            />

            <Text
                style={{
                    paddingLeft: 5,
                    ...FONTS.body4,
                    ...labelStyle
                }}
            >
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default IconLabelButton;