import React from "react";
import { View, ScrollView, Text, Image, FlatList } from "react-native";

import { IconLabel, TextButton, VerticalCourseCard, LineDivider, CourseListingView, IconButton } from "../../../components";
import { COLORS, FONTS, SIZES, images, icons, dummyData } from "../../../constants";


const CourseChapters = () => {

    function renderHeader() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                    paddingHorizontal: SIZES.padding
                }}
            >
                {/* Title */}
                <Text
                    style={{
                        ...FONTS.h2
                    }}
                >
                    {dummyData?.course_details?.title}
                </Text>
                
                {/* Views & Date Posted */}
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        marginTop: SIZES.base
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row"
                        }}
                    >
                        <IconLabel 
                            icon={icons.eye}
                            label={dummyData?.course_details?.views + " views"}
                            iconStyle={{
                                width: 15,
                                height: 15
                            }}
                            labelStyle={{
                                ...FONTS.body4
                            }}
                        />

                        <IconLabel 
                            icon={icons.time}
                            label={dummyData?.course_details?.date}
                            containerStyle={{
                                marginLeft: SIZES.padding
                            }}
                            iconStyle={{
                                width: 15,
                                height: 15
                            }}
                            labelStyle={{
                                ...FONTS.body4
                            }}
                        />
                    </View>

                    <IconButton 
                        icon={icons.heart_off}
                        iconStyle={{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.gray30
                        }}
                    />
                </View>

                {/* Instructor */}
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: SIZES.padding,
                        alignItems: "center"
                    }}
                >
                    {/* Profile Picture */}
                    <Image 
                        source={images.contributor_1}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25
                        }}
                    />

                    {/* Name & Follower Count */}
                    <View
                        style={{
                            flex: 1,
                            marginLeft: SIZES.base,
                            justifyContent: "center"
                        }}
                    >
                        <Text
                            style={{
                                ...FONTS.h3,
                            }}
                        >
                            {dummyData?.course_details?.instructor?.name}
                        </Text>

                        <Text
                            style={{
                                ...FONTS.body4,
                                color: COLORS.gray30
                            }}
                        >
                            {dummyData?.course_details?.instructor?.follower_count} followers
                        </Text>
                    </View>
                    

                    {/* Follow Button */}
                    <TextButton 
                        label="Follow +"
                        contentContainerStyle={{
                            width: 80,
                            height: 30,
                            borderRadius: 20
                        }}
                        labelStyle={{
                            ...FONTS.h3
                        }}
                    />
                </View>
            </View>
        )
    }

    function renderChapter() {
        return (
            <View>
                {dummyData?.course_details?.videos.map((item, index) => {
                    return (
                        <View
                            key={`Videos-${index}`}
                            style={{
                                alignItems: "center",
                                height: 70,
                                backgroundColor: item?.is_playing ? COLORS.additionalColor11 : null
                            }}
                        >
                            {/* Chapter Item Details */}
                            <View
                                style={{
                                    flexDirection: "row",
                                    paddingHorizontal: SIZES.padding,
                                    alignItems: "center",
                                    height: 70
                                }}
                            >
                                {/* Icon */}
                                <Image
                                    source={icons.play_1}
                                    style={{
                                        width: 40,
                                        height: 40,
                                        opacity: item?.is_playing ? 1 : 0.2
                                    }}
                                />

                                {/* Title & Duration */}
                                <View
                                    style={{
                                        flex: 1,
                                        marginLeft: SIZES.radius
                                    }}
                                >
                                    <Text style={{...FONTS.h3}}>{item?.title}</Text>
                                    <Text style={{...FONTS.body4, color: COLORS.gray30}}>{item?.duration}</Text>
                                </View>
                            </View>

                            {/* Progress Bar */}
                            {item?.is_playing &&
                                <View
                                    style={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        height: 5,
                                        width: item?.progress,
                                        backgroundColor: COLORS.primary
                                    }}
                                >

                                </View>
                            }
                        </View>
                    )
                })}
            </View>
        )
    }

    function renderRelatedCourses() {
        return (
            <View>
                <Text 
                    style={{
                        ...FONTS.h2, 
                        paddingHorizontal: SIZES.padding,
                        paddingBottom: SIZES.base
                    }}
                >
                    Related Courses
                </Text>
                <CourseListingView
                    data={dummyData.courses_list_2}
                />
            </View>
        )
    }

    return (
        <ScrollView>
            {/* Header */}
            {renderHeader()}

            {/* Line Divider */}
            <LineDivider 
                lineStyle={{
                    marginVertical: SIZES.padding,
                    marginHorizontal: SIZES.padding
                }}
            />

            {/* Chapters */}
            {renderChapter()}

            {/* Line Divider */}
            <LineDivider 
                lineStyle={{
                    marginVertical: SIZES.padding,
                    marginHorizontal: SIZES.padding
                }}
            />

            {/* Related Courses */}
            {renderRelatedCourses()}
        </ScrollView>
    )
}

export default CourseChapters;