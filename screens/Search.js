import React from "react";
import { View, Text } from "react-native";
import { SIZES, dummyData } from "../constants";
import { FlatList } from "react-native-gesture-handler";
import { CategoryCard } from "../components";

const Search = () => {

    function renderBrowseCategories() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >
                <Text
                    style={{
                        marginHorizontal: SIZES.padding,
                        ...FONTS.h2
                    }}
                >
                    Browse Categories
                </Text>

                <FlatList 
                    data={dummyData.categories}
                    numColumns={2}
                    scrollEnabled={false}
                    listKey="BrowseCategories"
                    keyExtractor={item => `BrowseCategories-${item.id}`}
                    contentContainerStyle={{
                        marginTop: SIZES.radius
                    }}
                    renderItem={({item, index}) => (
                        <CategoryCard
                            category={item}
                            containerStyle={{
                                height: 130,
                                width: (SIZES.width - (SIZES.padding *2) - SIZES.radius) / 2,
                                marginTop: SIZES.radius,
                                marginLeft: (index + 1) % 2 == 0 ? SIZES.radius : SIZES.padding
                            }}
                        />
                    )}
                />
            </View>
        )
    }

    return (
        <View>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {/* Browse Categories */}
                {renderBrowseCategories()}
            </ScrollView>
        </View>
    )
}

export default Search;