import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import IconLabel from "./IconLabel";
import { SIZES, COLORS, FONTS, icons } from "../constants";

const VerticalCourseCard = ({ containerStyle, course }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={{
                width: 270,
                ...containerStyle
            }}
            onPress={() => navigation.navigate('CourseDetails', {selectedCourse: 0})}
        >
            {/* Thumbnail */}
            <Image 
                source={course.thumbnail}
                resizeMode="cover"
                style={{
                    width: "100%",
                    height: 150,
                    marginBottom: SIZES.radius,
                    borderRadius: SIZES.radius
                }}
            />

            {/* Details */}
            <View
                style={{
                    flexDirection: 'row'
                }}
            >
                {/* Play */}
                <View
                    style={{
                        width: 30,
                        height: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 25,
                        backgroundColor: COLORS.primary
                    }}
                >
                    <Image
                        source={icons.play}
                        resizeMode="contain"
                        style={{
                            width: 10,
                            height: 10
                        }}
                    />
                </View>
                
                {/* Info */}
                <View
                    style={{
                        flexShrink: 1,
                        paddingHorizontal: SIZES.radius
                    }}
                >
                    <Text
                        style={{
                            flex: 1,
                            ...FONTS.h3,
                            fontSize: 18
                        }}
                    >
                        {course.title}
                    </Text>

                    <IconLabel
                        icon={icons.time}
                        label={course.duration}
                        containerStyle={{
                            marginTop: SIZES.base
                        }}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default VerticalCourseCard;