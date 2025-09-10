import { View, Text, Image } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

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
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    postStatus: "pending",
    postDate: "2023-10-01",
    tags: ["intro", "firstpost"],
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
        postDescription: "This is the description of my second post.",
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
    if (lengthOfTags > 3) {
        mostRecentCardTags = mostRecentCardTags.slice(0, 3);
        isShown = true;
        currentLength = lengthOfTags - 3;
    }
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
                    borderRadius: 24,
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
                    <Text className="text-xl font-sf-compact text-gray-600 mt-2">
                        {mostRecentCard.postDescription}
                    </Text>
                </View>
            </View>
        </View>
    );
}
