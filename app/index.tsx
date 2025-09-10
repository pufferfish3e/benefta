import "../global.css";
import { StatusBar, Text, View, Image, Pressable } from "react-native";
import { useFonts } from "../hooks/useFonts";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProfileCard, ProfileCardList } from "../components/CardList";
import Icon from "react-native-vector-icons/MaterialIcons";
import Navbar from "../components/Navbar";
import { router } from "expo-router";

export default function HomePage() {
    const fontsLoaded = useFonts();
    if (!fontsLoaded) {
        return null;
    }
    return (
        <SafeAreaView className="flex-1 bg-custom-white relative">
            <StatusBar barStyle={"dark-content"} />
            {/* Bottom leaf - render first to be behind everything */}
            <View className="absolute bottom-0 right-0 p-0 m-0">
                <Image
                    source={require("../assets/img/leaves.png")}
                    style={{ width: 200, height: 200, opacity: 0.7 }}
                    resizeMode="contain"
                />
            </View>
            <View className="flex-1 w-screen relative">
                <View className="absolute p-0">
                    <Image
                        source={require("../assets/img/leaf.png")}
                        style={{ width: 350, height: 300 }}
                        resizeMode="contain"
                    />
                </View>
                <View className="h-[200] relative z-20">
                    <Text className="absolute top-[105] left-10 text-2xl font-bunya-light text-custom-black">
                        hi, Username!
                    </Text>
                    <Text className="absolute top-[130] left-10 text-4xl font-bunya-light text-custom-black">
                        need something done?
                    </Text>
                    <Text className="absolute bottom-0 left-10 text-2xl font-bunya-regular text-custom-black">
                        your most recent request:
                    </Text>
                </View>
                <View className="h-fit relative z-20">
                    <ProfileCard />
                </View>
                <View className="w-screen h-[300] items-center z-20">
                    <Text className="mt-14 mb-2 text-2xl font-bunya-regular text-custom-black text-left w-[360]">
                        your other requests
                    </Text>
                    <ProfileCardList />
                </View>
                <View className="w-screen h-fit items-center">
                    <View className="flex mt-8 h-[50] w-[380] justify-center items-center bg-custom-green/60 rounded-3xl">
                        <View className="flex h-[50] w-[340] justify-center items-center bg-custom-green rounded-3xl">
                            <Pressable
                                onPress={() => {
                                    router.push("/new-request");
                                }}
                                className="w-full h-full justify-center items-center flex-row"
                            >
                                <Icon
                                    name="mail"
                                    size={20}
                                    color="#252D29"
                                    style={{ marginRight: 8 }}
                                />
                                <Text className="text-custom-black font-bunya-regular font-bold">
                                    Make a new request
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
                <View className="w-screen h-fit items-center mt-4 mb-6">
                    <Navbar />
                </View>
            </View>
        </SafeAreaView>
    );
}
