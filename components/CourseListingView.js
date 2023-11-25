import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { VerticalCourseCard, LineDivider } from "../components";
import { SIZES, COLORS } from '../constants';
import VerticalCourseCard from "./VerticalCourseCard";
import LineDivider from "./LineDivider";

const CourseListingView = ({data}) => {
  const navigation = useNavigation();

  return (
      <FlatList
        data={data}
        listkey="PopularCourses"
        scrollEnabled={false}
        keyExtractor={(item) => `PopularCourses-${item.id}`}
        contentContainerStyle={{
          // marginTop: SIZES.padding,
          paddingHorizontal: SIZES.padding
        }}
        renderItem={({ item, index }) => (
          <VerticalCourseCard
            course={item}
            containerStyle={{
              marginVertical: SIZES.radius,
              marginTop: index == 0 ? SIZES.radius : SIZES.padding
            }}
            onPress={() => navigation.navigate("CourseDetails", {selectedCourse: item})}
          />
        )}
        ItemSeparatorComponent={() => (
          <LineDivider
            lineStyle={{
              backgroundColor: COLORS.gray20,
            }}
          />
        )}
      />
  );
};

export default CourseListingView;
