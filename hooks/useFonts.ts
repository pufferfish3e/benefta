import { useEffect, useState } from "react";
import * as Font from "expo-font";

export function useFonts() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        async function loadFonts() {
            try {
                await Font.loadAsync({
                    "Bunya-Black": require("../assets/fonts/Bunya-Black_PERSONAL.ttf"),
                    "Bunya-Bold": require("../assets/fonts/Bunya-Bold_PERSONAL.ttf"),
                    "Bunya-Light": require("../assets/fonts/Bunya-Light_PERSONAL.ttf"),
                    "Bunya-Regular": require("../assets/fonts/Bunya-Regular_PERSONAL.ttf"),
                });
                setFontsLoaded(true);
            } catch (error) {
                console.error("Error loading fonts:", error);
            }
        }
        loadFonts();
    }, []);

    return fontsLoaded;
}
