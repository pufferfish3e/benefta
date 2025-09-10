import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function NewRequestPage() {
    return (
        <SafeAreaView className="flex-1 bg-custom-white">
            <View className="flex-1 p-6">
                <Text className="text-3xl font-bunya-bold text-custom-black mb-6">
                    Create New Request
                </Text>

                <Text className="text-lg font-bunya-regular text-custom-black mb-4">
                    What do you need help with?
                </Text>

                {/* Back button example */}
                <Pressable
                    onPress={() => router.back()}
                    className="mt-8 p-4 bg-custom-green rounded-xl flex-row items-center justify-center"
                >
                    <Icon
                        name="arrow-back"
                        size={20}
                        color="#252D29"
                        style={{ marginRight: 8 }}
                    />
                    <Text className="text-custom-black font-bunya-regular font-bold">
                        Go Back
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}
