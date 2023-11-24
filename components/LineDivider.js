import React from "react";
import { View } from "react-native";
import { COLORS } from "../constants";

const LineDivier = ({lineStyle}) => {
    return (
        <View
            style={{
                height: 1,
                // width: "100%",
                backgroundColor: COLORS.gray20,
                ...lineStyle
            }}
        />
    )
}

export default LineDivier;