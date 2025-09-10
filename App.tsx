import "./global.css";
import { StatusBar, Text, View, Image } from "react-native";
import { useFonts } from "./hooks/useFonts";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProfileCard } from "components/CardList";

export default function App() {
    const fontsLoaded = useFonts();
    if (!fontsLoaded) {
        return null;
    }
    return (
        <SafeAreaView className="flex-1 bg-custom-white relative">
            <StatusBar barStyle={"dark-content"} />
            <View className="flex-1">
                <View className="absolute p-0">
                    <Image
                        source={require("./assets/img/leaf.png")}
                        style={{ width: 350, height: 300 }}
                        resizeMode="contain"
                    />
                </View>
                <View className="h-[200] relative">
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
                <View className="h-fit relative">
                    <ProfileCard />
                </View>
            </View>
        </SafeAreaView>
    );
}
