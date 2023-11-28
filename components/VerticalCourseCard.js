import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import IconLabel from "./IconLabel";
import IconButton from "./IconButton";
import { SIZES, COLORS, FONTS, icons } from "../constants";

const VerticalCourseCard = ({ containerStyle, course, showPrice, showRating, onPress, showFavourite }) => {
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

                {/* Course Duration */}
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
                        // justifyContent: "space-between",
                        justifyContent: "flex-end",
                        alignItems: 'center',
                        marginTop: SIZES.radius
                    }}
                >
                    {/* {showPrice &&
                        <Text
                            style={{
                                ...FONTS.h3,
                                color: COLORS.primary
                            }}
                        >
                            RM {course.price.toFixed(2)}
                        </Text>
                    } */}

                    {showRating &&
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
                    }

                    {showFavourite &&
                        <View
                            style={{
                                width: "100%",
                                flexDirection: "row",
                                justifyContent: "flex-end"
                            }}
                        >
                            <IconButton 
                                icon={course?.is_favourite ? icons.favourite : icons.favourite_outline}
                                iconStyle={{
                                    width: 22,
                                    height: 22,
                                    tintColor: course?.is_favourite ? null : COLORS.gray30,
                                    paddingRight: SIZES.padding
                                }}
                            />
                        </View>
                    }
                    
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default VerticalCourseCard;