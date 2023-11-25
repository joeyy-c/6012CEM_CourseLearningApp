import React from "react";
import { View, Text, ImageBackground, useWindowDimensions  } from "react-native";
import { Video, ResizeMode } from 'expo-av';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import { COLORS, FONTS, SIZES, dummyData, icons } from "../../constants";
import { IconButton, LineDivider } from "../../components";
import CourseChapters from "./CourseTabs/CourseChapters";
import CourseFiles from "./CourseTabs/CourseFiles";
import CourseDiscussions from "./CourseTabs/CourseDiscussions";

const ChaptersRoute = () => (
    <CourseChapters></CourseChapters>
);
  
const FilesRoute = () => (
    <CourseFiles></CourseFiles>
);

const DiscussionsRoute = () => (
    <CourseDiscussions></CourseDiscussions>
);

  const renderScene = SceneMap({
    chapters: ChaptersRoute,
    files: FilesRoute,
    discussions: DiscussionsRoute
  });

const CourseDetails = ({ navigation, route }) => {    

    // Video
    const { selectedCourse } = route.params;
    // const [playVideo, setPlayVideo] = React.useState(false);
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    // Tab
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'chapters', title: 'Chapters' },
        { key: 'files', title: 'Files' },
        { key: 'discussions', title: 'Discussions' },
    ]);

    // function renderHeaderComponents() {
    //     return (
    //         <>
    //             {/* Back */}
    //             <View
    //                 style={{
    //                     flex: 1
    //                 }}
    //             >
    //                 <IconButton
    //                     icon={icons.back}
    //                     iconStyle={{
    //                         tintColor: COLORS.white,
    //                         width: 18
    //                     }}
    //                     containerStyle={{
    //                         position: "absolute",
    //                         top: 30,
    //                         width: 50,
    //                         height: 50,
    //                         alignItems: "center",
    //                         justifyContent: "center",
    //                         borderRadius: 25,
    //                         backgroundColor: COLORS.transparentBlack4
    //                     }}
    //                     onPress={() => navigation.goBack()}
    //                 />
    //             </View>

    //             {/* Share & Favourite */}
    //             <View
    //                 style={{
    //                     flexDirection: "row"
    //                 }}
    //             >
    //                 <IconButton
    //                     icon={icons.media}
    //                     iconStyle={{
    //                         tintColor: COLORS.white,
    //                         width: 25
    //                     }}
    //                     containerStyle={{
    //                         top: 30,
    //                         width: 50,
    //                         height: 50,
    //                         alignItems: "center",
    //                         justifyContent: "center"
    //                     }}
    //                 />

    //                 <IconButton
    //                     icon={icons.favourite_outline}
    //                     iconStyle={{
    //                         tintColor: COLORS.white,
    //                         width: 25
    //                     }}
    //                     containerStyle={{
    //                         top: 30,
    //                         width: 40,
    //                         height: 50,
    //                         alignItems: "center",
    //                         justifyContent: "center"
    //                     }}
    //                 />
    //             </View>
    //         </>
    //     )
    // }

    // function renderHeader() {
    //     return (
    //         <View
    //             style={{
    //                 position: "absolute",
    //                 top: SIZES.height > 800 ? 40 : 20,
    //                 left: 0,
    //                 right: 0,
    //                 flexDirection: "row",
    //                 paddingHorizontal: SIZES.padding,
    //                 zIndex: 1
    //             }}
    //         >
    //             {/* {renderHeaderComponents()} */}
    //         </View>
    //     )
    // }

    function renderVideoSection() {
        return (
            <View
                style={{
                    paddingTop: 50,
                    backgroundColor: COLORS.gray90
                }}
            >
                {/* Thumbnail */}
                {/* <ImageBackground
                    source={selectedCourse?.thumbnail}
                    style={{
                        width: "100%",
                        height: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                > */}
                    {/* Play Button */}
                    {/* <IconButton
                        icon={status.isPlaying? icons.stop : icons.play}
                        iconStyle={{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.white
                        }}
                        containerStyle={{
                            width: 55,
                            height: 55,
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: SIZES.padding,
                            borderRadius: 30,
                            backgroundColor: COLORS.primary
                        }}
                        onPress={() =>
                            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                        }
                    /> */}
                {/* </ImageBackground> */}

                <Video
                    ref={video}
                    source={{
                    uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                    }}
                    style={{
                        width: "100%",
                        height: 240,
                    }}
                    useNativeControls
                    shouldPlay
                    resizeMode={ResizeMode.CONTAIN}
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
            </View>
        )
    }

    function renderContent() {
        return (
            <View
                style={{
                    flex: 1
                }}
            >
            
                {/* Tabs */}
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                    renderTabBar={(props) => (
                        <TabBar
                            {...props}
                            indicatorStyle={{ backgroundColor: COLORS.primary }} // color of the active tab indicator
                            style={{ backgroundColor: COLORS.white }} // style of tab bar
                            activeColor={COLORS.black}
                            inactiveColor={COLORS.black}
                            labelStyle={{...FONTS.h4}}
                        />
                    )}
                />

                {/* Line Divider */}
                <LineDivider />

                {/* Content */}

            </View>
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
            {/* {renderHeader()} */}

            {/* Video */}
            {renderVideoSection()}

            {/* Content */}
            {renderContent()}
        </View>
    )
}

export default CourseDetails;