import React from "react";
import { View, Text, ImageBackground, useWindowDimensions  } from "react-native";
import { Video, ResizeMode } from 'expo-av';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import { COLORS, FONTS, SIZES, dummyData, icons } from "../../constants";
import { IconButton, LineDivider } from "../../components";
import CourseChapters from "./CourseTabs/CourseChapters";
import CourseFiles from "./CourseTabs/CourseFiles";
import CourseDiscussions from "./CourseTabs/CourseDiscussions";

const ChaptersRoute = () => (<CourseChapters></CourseChapters>);
const FilesRoute = () => (<CourseFiles></CourseFiles>);
const DiscussionsRoute = () => (<CourseDiscussions></CourseDiscussions>);

  const renderScene = SceneMap({
    chapters: ChaptersRoute,
    files: FilesRoute,
    discussions: DiscussionsRoute
  });

const CourseDetails = ({ navigation, route }) => {    

    // Video
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

    function backHandler() {
        navigation.goBack();
    }

    function renderVideoSection() {
        return (
            <View
                style={{
                    paddingTop: 80,
                    backgroundColor: COLORS.gray90
                }}
            >

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

                <IconButton
                    icon={icons.back}
                    iconStyle={{
                        width: 25,
                        height: 25,
                        tintColor: COLORS.white
                    }}
                    containerStyle={{
                        position: 'absolute',
                        top: 10,
                        left: 10,
                        width: 55,
                        height: 55,
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: SIZES.padding,
                        borderRadius: 30,
                        // backgroundColor: COLORS.primary
                    }}
                    onPress={() => {
                        backHandler()
                    }}
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