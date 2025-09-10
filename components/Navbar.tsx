import { View, Text, Image, Pressable } from "react-native";

export default function Navbar() {
    return (
        <View className="flex-row items-center p-4 rounded-3xl border border-gray-300 w-[340] h-[60] bg-custom-white justify-evenly">
            <Pressable
                onPress={() => {
                    console.log("Home Button Pressed");
                }}
                className="w-[40] h-[40] justify-center items-center"
            >
                <Image
                    source={require("../assets/img/home.png")}
                    style={{ width: 40, height: 40 }}
                    resizeMode="contain"
                />
            </Pressable>
            <Pressable
                onPress={() => {
                    console.log("Email Button Pressed");
                }}
                className="w-[40] h-[40] justify-center items-center"
            >
                <Image
                    source={require("../assets/img/email.png")}
                    style={{ width: 40, height: 40 }}
                    resizeMode="contain"
                />
            </Pressable>
            <Pressable
                onPress={() => {
                    console.log("Exclamation Mark Button Pressed");
                }}
                className="w-[40] h-[40] justify-center items-center"
            >
                <Image
                    source={require("../assets/img/exclamationmark.png")}
                    style={{ width: 40, height: 40 }}
                    resizeMode="contain"
                />
            </Pressable>
            <Pressable
                onPress={() => {
                    console.log("Settings Button Pressed");
                }}
                className="w-[40] h-[40] justify-center items-center"
            >
                <Image
                    source={require("../assets/img/settings.png")}
                    style={{ width: 40, height: 40 }}
                    resizeMode="contain"
                />
            </Pressable>
        </View>
    );
}
