import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { IconButton, CourseListingView } from "../components";
import { COLORS, FONTS, SIZES, icons, dummyData } from '../constants';


const History = () => {

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
					<Text style={{ ...FONTS.h2 }}>History</Text>
				</View>
			</View>
		)
	}

    function renderHistory() {
        return (
            <View>
                <CourseListingView
                    data={dummyData.courses_list_2}
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

            {/* History Course Listing */}
            {renderHistory()}
        </ScrollView>
    )
}

export default History;