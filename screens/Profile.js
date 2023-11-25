import React from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { IconButton, IconLabel, TextButton, HorizontalCourseCard, CourseListingView } from "../components";
import { COLORS, FONTS, SIZES, icons, images, dummyData } from '../constants';


const Profile = ({ route }) => {
    const { isSelfProfile } = route.params;
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

				{/* Greetings */}
				<View style={{
					flex: 1
				}}>
					<Text style={{ ...FONTS.h2 }}>{isSelfProfile ? "Profile" : "Instructor Profile"}</Text>
				</View>

				{/* Profile Logo */}
                {isSelfProfile &&
                    <IconButton
                        icon={icons.settings}
                        iconStyle={{
                            tintColor: COLORS.black
                        }}
                    />
                }
			</View>
		)
	}

    function renderProfileDetails() {
        return (
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "right",
                    alignItems: "center",
                    paddingHorizontal: SIZES.padding,
                    paddingTop: SIZES.padding
                }}
            >
                {/* Profile Picture */}
                <Image 
                    source={images.contributor_1}
                    style={{
                        width: 80,
                        height: 80,
                        borderRadius: 50
                    }}
                />

                {/* Name & Specialist */}
                <View
                    style={{
                        flex: 1,
                        paddingLeft: SIZES.padding
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.h2,
                        }}
                    >
                        {dummyData?.course_details?.instructor?.name}
                    </Text>

                    <Text
                        style={{
                            paddingTop: SIZES.base,
                            ...FONTS.body3,
                            color: COLORS.gray30
                        }}
                    >
                        {dummyData?.course_details?.instructor?.title}
                    </Text>
                </View>

                {/* Edit Profile Button */}
                {isSelfProfile ? (
                    <View>
                        <IconButton 
                            icon={icons.edit}
                            containerStyle={{
                                borderWidth: 1,
                                borderColor: COLORS.gray10,
                                borderRadius: SIZES.radius,
                                padding: SIZES.base
                            }}
                            iconStyle={{
                                width: 16,
                                height: 16,
                                tintColor: COLORS.gray30
                            }}
                        />
                    </View>
                ) : (
                    <View>
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
                )}
                
            </View>
        )
    }

    function renderProfileData() {
        return(
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    paddingVertical: SIZES.padding,
                    marginHorizontal: SIZES.padding,
                    marginTop: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.additionalColor11,
                }}
            >
                <View
                    style={{
                        alignItems: "center",
                        width: "40%"
                    }}
                >
                    <Text
                       style={{
                        ...FONTS.h1,
                        color: COLORS.primary
                       }} 
                    >
                        {dummyData?.course_details?.instructor?.courses_count}
                    </Text>

                    <Text
                        style={{
                            ...FONTS.body3,
                            color: COLORS.primary
                        }}
                    >
                       { isSelfProfile ? 'Courses Completed' : 'Courses Posted' }
                    </Text>
                </View>

                <View
                    style={{
                        alignItems: "center",
                        width: "40%"
                    }}
                >
                    <Text
                       style={{
                        ...FONTS.h1,
                        color: COLORS.primary
                       }} 
                    >
                        {dummyData?.course_details?.instructor?.following_count}
                    </Text>

                    <Text
                        style={{
                            ...FONTS.body3,
                            color: COLORS.primary
                        }}
                    >
                       { isSelfProfile ? 'Following' : 'Follower' }
                    </Text>
                </View>
                
            </View>
        )
    }

    function renderCourses(title) {
		return (
            <View
                style={{
                    paddingTop: 50,
                }}
            >

                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginHorizontal: SIZES.padding
                    }}
                >
                    <IconLabel 
                        icon={title == "History" ? icons.history : icons.favourite_outline}
                        label={title}
                        iconStyle={{
                            width: 22,
                            height: 22,
                            tintColor: COLORS.black
                        }}
                        labelStyle={{
                            ...FONTS.h2,
                            color: COLORS.black
                        }}
                    />

                    <TextButton
                        contentContainerStyle={{
                            width: 80,
                            borderRadius: 30,
                            backgroundColor: COLORS.primary
                        }}
                        label="See All"
                        onPress={() => navigation.navigate(title)}
                    />
                </View>

                <FlatList
                    horizontal
                    data={dummyData.courses_list_1}
                    listKey="Courses"
                    keyExtractor={item => `Courses-${item.id}`}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        marginTop: 20
                    }}
                    renderItem={ ({item, index}) => (
                        <HorizontalCourseCard 
                            containerStyle={{
                                marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
                                marginRight: index == dummyData.courses_list_1.length - 1 ? SIZES.padding : 0
                            }}
                            course={item}
                        />
                    )}
                />
            </View>
			
		)
	}

    function renderCourseListing() {
        return (
            <View>
                <Text 
                    style={{
                        ...FONTS.h2, 
                        paddingHorizontal: SIZES.padding,
                        paddingTop: SIZES.padding,
                        paddingBottom: SIZES.base
                    }}
                >
                    Total Courses Posted ({dummyData?.course_details?.instructor?.courses_count})
                </Text>
                <CourseListingView
                    data={dummyData.courses_list_2}
                />
            </View>
        )
    }

    return (
        <ScrollView style={{
			flex: 1,
			backgroundColor: COLORS.white
		}}>

            {/* Header */}
            {renderHeader()}

            {/* Profile Info */}
            {renderProfileDetails()}

            {/* Profile Data */}
            {renderProfileData()}

            {isSelfProfile ? (
                <>
                    {/* History */}
                    {renderCourses("History")}

                    {/* Favourites */}
                    {renderCourses("Favourite")}
                </>
            ) : (
                /* Courses Listing */
                renderCourseListing()
            )}
        </ScrollView>
    )

}

export default Profile;