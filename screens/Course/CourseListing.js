import { React } from "react";
import {View, Text, Image, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { IconButton, CourseListingView } from "../../components";
import { COLORS, FONTS, SIZES, icons, dummyData } from "../../constants";

const CourseListing = ({ route }) => {
    const { category } = route.params;
    const navigation = useNavigation();
    console.log(category);

    function backHandler() {
        navigation.goBack();
    }

    function renderHeader() {
        return (
            <View
                style={{
                    height: 250,
                    overflow: "hidden"
                }}
            >
                <Image
                    source={category?.thumbnail}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderBottomLeftRadius: 60
                    }}
                />

                <IconButton
                    icon={icons.back}
                    iconStyle={{
                        tintColor: COLORS.white,
                        width: 18
                    }}
                    containerStyle={{
                        position: "absolute",
                        top: 70,
                        left: 20,
                        width: 50,
                        height: 50,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 25,
                        backgroundColor: COLORS.transparentBlack1
                    }}
                    onPress={() => {
                        backHandler()
                    }}
                />

                <Text
                    style={{
                        position: "absolute",
                        bottom: 50,
                        left: 40,
                        color: COLORS.white,
                        ...FONTS.h1
                    }}
                >
                    {category?.title}
                </Text>
            </View>
        )
    }

    function renderResultCount() {
        return (
            <View
                style={{
                    marginHorizontal: SIZES.padding,
                    marginVertical: SIZES.padding
                }}
            >
                <Text
                    style={{
                        ...FONTS.body3
                    }}
                >
                    1,891 Results
                </Text>
            </View>
        )
    }

    function renderCourseListing() {
        return (
            <ScrollView
                contentContainerStyle={{
					paddingBottom: 40
				}}
            >
                <CourseListingView
                    data={dummyData.courses_list_2}
                />
            </ScrollView>
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

            {/* Count of Result */}
            {renderResultCount()}

            {/* Course Listing */}
            {renderCourseListing()}
        </View>
    )
}

export default CourseListing;