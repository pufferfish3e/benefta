/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./App.{js,ts,tsx}",
        "./app/**/*.{js,ts,tsx}",
        "./components/**/*.{js,ts,tsx}",
    ],

    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            fontFamily: {
                "bunya-black": ["Bunya-Black"],
                "bunya-bold": ["Bunya-Bold"],
                "bunya-light": ["Bunya-Light"],
                "bunya-regular": ["Bunya-Regular"],
                "sf-compact": ["SF-Compact"],
            },
            colors: {
                "custom-white": "#F1F4F2",
                "custom-black": "#252D29",
                "custom-green": "#61D190",
                "custom-darkgreen": "#31815C",
            },
        },
    },
    plugins: [],
};
