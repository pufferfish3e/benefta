import { View, Text, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
interface CardProps {
    username: string;
    postTitle: string;
    profileImageURL: string;
    postDescription: string;
    postStatus: string;
    postDate: string;
    tags: string[];
}

// Darryan, if u have time please integrate the data into a database. But for demo/mvp purposes u dont have to.

const mostRecentCard: CardProps = {
    username: "JohnDoe",
    postTitle: "My First Post",
    profileImageURL: "https://avatar.iran.liara.run/public",
    postDescription:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    postStatus: "pending",
    postDate: "2023-10-01",
    tags: ["programming", "tagname2", "tagname3", "tagname4", "tagname5"],
};

const cardData: CardProps[] = [
    {
        username: "JohnDoe",
        postTitle: "My First Post",
        profileImageURL: "https://avatar.iran.liara.run/public",
        postDescription: "This is the description of my first post.",
        postStatus: "pending",
        postDate: "2023-10-01",
        tags: ["intro", "firstpost"],
    },
    {
        username: "JohnDoe2",
        postTitle: "My Second Post",
        profileImageURL: "https://avatar.iran.liara.run/public",
        postDescription:
            "This is the description of my second post and it's intentionally much longer to test the truncation functionality.",
        postStatus: "published",
        postDate: "2023-10-01",
        tags: ["intro", "secondpost"],
    },
    {
        username: "JohnDoe3",
        postTitle: "My Third Post",
        profileImageURL: "https://avatar.iran.liara.run/public",
        postDescription: "This is the description of my third post.",
        postStatus: "published",
        postDate: "2023-10-01",
        tags: ["intro", "thirdpost"],
    },
];

export function ProfileCard() {
    let mostRecentCardTags = mostRecentCard.tags;
    let lengthOfTags = mostRecentCardTags.length;
    let isShown = false;
    let currentLength = 0;
    if (lengthOfTags > 2) {
        mostRecentCardTags = mostRecentCardTags.slice(0, 2);
        isShown = true;
        currentLength = lengthOfTags - 2;
    }
    const truncateText = (text: string, maxLength: number = 50) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength).trim() + "...";
    };
    return (
        <View className="relative mt-5">
            <LinearGradient
                colors={["rgba(97, 209, 144, 0.4)", "rgba(137, 230, 133, 0.4)"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                    position: "absolute",
                    top: 40,
                    left: 0,
                    height: "100%",
                    width: 360,
                    borderTopRightRadius: 24,
                    borderBottomRightRadius: 24,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                }}
            >
                <View className="absolute flex-row bottom-0 h-[40] py-1 w-[360] px-2 justify-center items-center">
                    {mostRecentCardTags.map((tag) => (
                        <Text
                            key={tag}
                            className="text-black font-sf-compact text-sm bg-custom-green rounded-xl px-3 py-1 ml-2"
                        >
                            {tag}
                        </Text>
                    ))}
                    {isShown && (
                        <Text className="text-black font-sf-compact text-sm x-3 py-1 ml-2">
                            {`+${currentLength} others`}
                        </Text>
                    )}
                </View>
            </LinearGradient>
            <View className="flex-row h-fit mx-auto min-h-36 w-[360] bg-custom-white border border-gray-300 rounded-3xl p-5 relative z-10">
                <View className="items-center">
                    <Image
                        source={{ uri: mostRecentCard.profileImageURL }}
                        className="w-10 h-10 rounded-full mb-2"
                    />
                </View>
                <View className="ml-4 flex-1">
                    <View className="flex-row items-center justify-between">
                        <Text className="text-lg font-sf-compact text-gray-500">
                            {mostRecentCard.username}
                        </Text>
                        <Text className="text-sm font-sf-compact text-custom-darkgreen">
                            {mostRecentCard.postStatus}
                        </Text>
                    </View>
                    <View className="flex-row items-center justify-between">
                        <Text className="text-lg font-sf-compact text-custom-black font-bold">
                            {mostRecentCard.postTitle}
                        </Text>
                        <Text className="text-sm font-sf-compact text-gray-400">
                            {mostRecentCard.postDate}
                        </Text>
                    </View>
                    <Text className="text-lg font-sf-compact text-gray-600">
                        {truncateText(mostRecentCard.postDescription, 100)}
                    </Text>
                </View>
            </View>
        </View>
    );
}

function CardList({ card }: { card: CardProps }) {
    const truncateText = (text: string, maxLength: number = 50) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength).trim() + "...";
    };

    return (
        <View className="relative mt-5">
            <LinearGradient
                colors={["rgba(241, 244, 242, 0.05)", "rgba(37, 45, 41, 0.05)"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                    flexDirection: "row",
                    minHeight: 90,
                    width: 360,
                    marginHorizontal: "auto",
                    borderBottomWidth: 2,
                    borderLeftWidth: 2,
                    borderColor: "#D1D5DB",
                    padding: 15,
                    position: "relative",
                    zIndex: 10,
                    borderRadius: 8,
                }}
            >
                <View className="ml-4 flex-1">
                    <View className="flex-row items-center justify-between">
                        <Text className="text-lg font-sf-compact text-custom-black font-bold flex-1">
                            {card.postTitle}
                        </Text>
                        <View className="flex-row items-center">
                            <Text className="text-sm font-sf-compact text-custom-darkgreen mr-2">
                                {card.postStatus}
                            </Text>
                            <Text className="text-sm font-sf-compact text-gray-400">
                                {card.postDate}
                            </Text>
                        </View>
                    </View>
                    <Text
                        numberOfLines={2}
                        ellipsizeMode="tail"
                        className="text-md font-sf-compact text-gray-600 mt-2"
                    >
                        {truncateText(card.postDescription)}
                    </Text>
                </View>
            </LinearGradient>
        </View>
    );
}

export function ProfileCardList() {
    return (
        <ScrollView className="h-fit z-10" showsVerticalScrollIndicator={false}>
            <View className="w-[360] h-fit">
                <CardList card={cardData[0]} />
                <CardList card={cardData[1]} />
                <CardList card={cardData[2]} />
            </View>
        </ScrollView>
    );
}
