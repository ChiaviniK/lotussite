/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#2E7D32', // Green
                secondary: '#1565C0', // Blue
                accent: '#FFC107', // Amber
                neutral: '#F5F5F5',
                dark: '#212121',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
