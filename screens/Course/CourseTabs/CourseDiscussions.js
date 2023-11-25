import React from "react";
import { View, Text, TextInput, Image, FlatList, Keyboard } from "react-native";

import { IconButton, IconLabelButton } from "../../../components";
import { COLORS, FONTS, SIZES, icons, dummyData } from "../../../constants";


const CommentSection = ({commentItem, commentOption, replies}) => {
    return (
        <View
            style={{
                flexDirection: "row",
                marginTop: SIZES.padding
            }}
        >
            {/* Profile Picture */}
            <Image 
                source={commentItem?.profile}
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20
                }}
            />

            {/* Name & Comment */}
            <View
                style={{
                    flex: 1,
                    marginLeft: SIZES.radius
                }}
            >

                <View
                    style={{
                        flexDirection: "row"
                    }}
                >
                    {/* Name */}
                    <Text
                        style={{
                            ...FONTS.h3
                        }}
                    >
                        {commentItem?.name} 
                    </Text>

                    {/* Name */}
                    <Text
                        style={{
                            ...FONTS.body4,
                            color: COLORS.gray30,
                            paddingLeft: 5
                        }}
                    >
                       {`\u2022`} {commentItem?.posted_on}
                    </Text>
                </View>

                {/* Comment */}
                <Text
                    style={{
                        ...FONTS.body4
                    }}
                >
                    {commentItem?.comment}
                </Text>

                {/* Comment Option */}
                {commentOption}

                {/* Replies */}
                {replies}
            </View>
        </View>
    )
}

const CourseDiscussions = () => {

    const [footerPosition, setFooterPosition] = React.useState(0);
    React.useEffect(() => {
        // Listen to the keyboard
        const showSubscription = Keyboard.addListener("keyboardWillShow", (e) => {
            setFooterPosition(e.endCoordinates.height - 1)
        })

        const hideSubscription = Keyboard.addListener("keyboardWillHide", (e) => {
            setFooterPosition(0)
        })

        return () => {
            showSubscription.remove()
            hideSubscription.remove()
        }
    }, [])


    function renderDiscussions() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingBottom: 50
                }}
            >
                <FlatList 
                    data={dummyData?.course_details?.discussions}
                    keyExtractor={item => `Discussions-main-${item.id}`}
                    contentContainerStyle={{
                        paddingHorizontal: SIZES.padding,
                        paddingBottom: 70
                    }}
                    renderItem={({item, index}) => (
                        <CommentSection 
                            commentItem={item}
                            commentOption={
                                <View
                                    style={{
                                        flexDirection: "row",
                                        paddingVertical: SIZES.base,
                                        borderBottomWidth: 1,
                                        borderColor: COLORS.gray20
                                    }}
                                >
                                    {/* Like */}
                                    <IconLabelButton 
                                        icon={item?.liked ? icons.favourite : icons.favourite_outline}
                                        label={item?.no_of_likes}
                                        containerStyle={{
                                            paddingLeft: 0
                                        }}
                                        iconStyle={{
                                            width: 16,
                                            height: 16,
                                            tintColor: item?.liked ? null : COLORS.gray30
                                        }}
                                        labelStyle={{
                                            marginLeft: 3,
                                            color: COLORS.gray30
                                        }}
                                    />

                                    {/* Comment */}
                                    <IconLabelButton 
                                        icon={icons.comment}
                                        label={item?.no_of_comments}
                                        iconStyle={{
                                            width: 16,
                                            height: 16,
                                            tintColor: COLORS.gray30
                                        }}
                                        labelStyle={{
                                            marginLeft: 3,
                                            color: COLORS.gray30
                                        }}
                                    />
                                </View>
                            }
                            replies={
                                <FlatList
                                    data={item?.replies}
                                    scrollEnabled={false}
                                    keyExtractor={item => `Discussion-replies-${item.id}`}
                                    renderItem={({item, index}) => (
                                        <CommentSection
                                            commentItem={item}
                                            commentOption={
                                                <View
                                                    style={{
                                                        flexDirection: "row",
                                                        paddingVertical: SIZES.base,
                                                        borderBottomWidth: 1,
                                                        borderColor: COLORS.gray20
                                                    }}
                                                >

                                                    {/* Like */}
                                                    <IconLabelButton 
                                                        icon={item?.liked ? icons.favourite : icons.favourite_outline}
                                                        label={item?.no_of_likes}
                                                        containerStyle={{
                                                            paddingLeft: 0
                                                        }}
                                                        iconStyle={{
                                                            width: 16,
                                                            height: 16,
                                                            tintColor: item?.liked ? null : COLORS.gray30
                                                        }}
                                                        labelStyle={{
                                                            marginLeft: 3,
                                                            color: COLORS.gray30
                                                        }}
                                                    />

                                                    {/* Reply */}
                                                    <IconLabelButton
                                                        icon={icons.reply}
                                                        iconStyle={{
                                                            width: 16,
                                                            height: 16,
                                                            tintColor: COLORS.gray30
                                                        }}
                                                        label="Reply"
                                                        labelStyle={{
                                                            marginLeft: 3,
                                                            color: COLORS.gray30
                                                        }}
                                                    />
                                                </View>
                                            }
                                        />
                                    )}
                                />
                            }
                        />
                    )}
                />
            </View>
        )
    }

    function renderCommentInput() {
        return (
            <View
                style={{
                    flexDirection: "row",
                    position: "absolute",
                    bottom: footerPosition,
                    left: 0,
                    right: 0,
                    height: 80,
                    paddingHorizontal: SIZES.padding,
                    paddingVertical: SIZES.padding,
                    backgroundColor: COLORS.additionalColor9
                }}
            >
                <TextInput
                    style={{
                        flex: 1,
                        marginRight: SIZES.base,
                        ...FONTS.body3
                    }}
                    placeholder="Add a comment ..."
                    placeholderTextColor={COLORS.gray40}
                    multiline
                />

                <IconButton 
                    icon={icons.send}
                    iconStyle={{
                        width: 25,
                        height: 25,
                        tintColor: COLORS.primary
                    }}
                />
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
            {/* Discussions */}
            {renderDiscussions()}

            {/* Comment Input */}
            {renderCommentInput()}
        </View>
    )
}

export default CourseDiscussions;