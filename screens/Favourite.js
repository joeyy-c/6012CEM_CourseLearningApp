import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { IconButton, CourseListingView } from "../components";
import { COLORS, FONTS, SIZES, icons, dummyData } from '../constants';


const Favourite = () => {

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
					<Text style={{ ...FONTS.h2 }}>Favourites</Text>
				</View>
			</View>
		)
	}

    function renderFavourites() {
        return (
            <View>
                <CourseListingView
                    data={dummyData.courses_list_2}
                    showFavourite={true}
                />
            </View>
        )
    }

    return (
        <ScrollView
            style={{
                backgroundColor: COLORS.white
            }}
        >
            {/* Header */}
            {renderHeader()}

            {/* Favourite Course Listing */}
            {renderFavourites()}
        </ScrollView>
    )
}

export default Favourite;