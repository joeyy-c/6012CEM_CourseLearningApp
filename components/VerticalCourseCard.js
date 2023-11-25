import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import IconLabel from "./IconLabel";
import { SIZES, COLORS, FONTS, icons } from "../constants";

const VerticalCourseCard = ({ containerStyle, course, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                ...containerStyle
            }}
            onPress={onPress}
        >
            {/* Thumbnail */}
            <ImageBackground
                source={course.thumbnail}
                resizeMode="cover"
                style={{
                    width: 150,
                    height: 100,
                    marginBottom: SIZES.radius
                }}
                imageStyle={{
                    borderRadius: SIZES.radius
                }}
            >

                <View
                    style={{
                        position: 'absolute',
                        bottom: 10,
                        right: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5,
                        padding: 3,
                        backgroundColor: COLORS.transparentBlack4
                    }}
                >

                    <Text style={{color: COLORS.white}}>{course.duration}</Text>
                </View>
            </ImageBackground>

            {/* Details */}
            <View
                style={{
                    flex: 1,
                    marginLeft: 20
                }}
            >
                {/* Title */}
                <Text
                    style={{
                        ...FONTS.h3,
                    }}
                >
                    {course.title}
                </Text>

                {/* Instructor & Duration */}
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: SIZES.base
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.body4,
                            color: COLORS.gray30
                        }}
                    >
                        {course.instructor + "  \u2022  " + course.views + " views"}
                    </Text>
                </View>

                {/* Price & Ratings */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: "space-between",
                        alignItems: 'center',
                        marginTop: SIZES.radius
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.h3,
                            color: COLORS.primary
                        }}
                    >
                        RM {course.price.toFixed(2)}
                    </Text>

                    <IconLabel
                        icon={icons.star}
                        label={course.ratings}
                        containerStyle={{
                            marginRight: SIZES.base
                        }}
                        iconStyle={{
                            width: 15,
                            height: 15,
                            tintColor: COLORS.primary2
                        }}
                        labelStyle={{
                            marginLeft: 5,
                            // color: COLORS.black,
                            ...FONTS.body3
                        }}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default VerticalCourseCard;