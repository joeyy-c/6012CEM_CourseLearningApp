import React from "react";
import { View, ScrollView, Text, Image } from "react-native";

import { IconButton, TextButton } from "../../../components";
import { COLORS, FONTS, SIZES, icons, dummyData } from "../../../constants";


const CourseFiles = () => {

    function renderContributors() {

        let contributors = []

        if (dummyData?.course_details?.contributors.length > 3) {
            contributors = dummyData?.course_details?.contributors.slice(0, 3)
        }
        else {
            contributors = dummyData?.course_details?.contributors
        }

        return (
            <View>
                <Text
                    style={{
                        ...FONTS.h2
                    }}
                >
                    Contributors
                </Text>

                <View
                    style={{
                        flexDirection: "row",
                        marginTop: SIZES.radius,
                        alignItems: "center"
                    }}
                >
                    {contributors.map((item, index) => {
                        return (
                            <View
                                key={`Contributors-${index}`}
                                style={{
                                    marginLeft: index > 0 ? SIZES.radius : 0
                                }}
                            >
                                <Image 
                                    source={item?.thumbnail}
                                    style={{
                                        width: 80,
                                        height: 80
                                    }}
                                />
                            </View>
                        )
                    })}

                    {dummyData?.course_details?.contributors.length > 3 && 
                        <TextButton 
                            label="View All"
                            labelStyle={{
                                color: COLORS.primary,
                                ...FONTS.h3
                            }}
                            contentContainerStyle={{
                                width: 80,
                                height: 80,
                                borderRadius: 10,
                                marginLeft: SIZES.radius,
                                backgroundColor: COLORS.additionalColor11
                            }}
                        />
                    }
                </View>
            </View>
        )
    }

    function renderFiles() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >
                <Text
                    style={{
                        ...FONTS.h2
                    }}
                >
                    Files
                </Text>

                {dummyData?.course_details?.files.map((item, index) => {
                    return (
                        <View
                            key={`Files-${index}`}
                            style={{
                                flexDirection: "row",
                                marginTop: SIZES.radius
                            }}
                        >
                            {/* Thumbnail */}
                            <Image 
                                source={item?.thumbnail}
                                style={{
                                    width: 80,
                                    height: 80
                                }}
                            />
                            
                            {/* Name, Instructor, Date */}
                            <View
                                style={{
                                    flex: 1,
                                    marginLeft: SIZES.radius
                                }}
                            >
                                <Text
                                    style={{
                                        ...FONTS.h2
                                    }}
                                >
                                    {item?.name}
                                </Text>

                                <Text
                                    style={{
                                        ...FONTS.body3,
                                        color: COLORS.gray30
                                    }}
                                >
                                    by {item?.author}
                                </Text>

                                <Text
                                    style={{
                                        ...FONTS.body4
                                    }}
                                >
                                    {item?.upload_date}
                                </Text>
                            </View>

                            {/* Menu */}
                        </View>
                    )
                })}
            </View>
        )
    }

    return (
        <ScrollView
            contentContainerStyle={{
                padding: SIZES.padding
            }}
        >
            {/* Contributors */}
            {renderContributors()}

            {/* Files */}
            {renderFiles()}
        </ScrollView>
    )
}

export default CourseFiles;