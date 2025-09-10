import "../global.css";
import { Stack } from "expo-router";
import { useFonts } from "../hooks/useFonts";

export default function RootLayout() {
    const fontsLoaded = useFonts();

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
                name="new-request"
                options={{ title: "New Request" }}
            />
        </Stack>
    );
}
