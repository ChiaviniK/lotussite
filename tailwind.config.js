/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#004D40', // Deep Forest Green
                secondary: '#00796B', // Emerald Green
                accent: '#D4AF37', // Gold
                dark: '#0B1215', // Deep Charcoal
                light: '#F8FAF9', // Mint Tinted White
                muted: '#64748B', // Muted Slate
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #C5A059 100%)',
                'green-gradient': 'linear-gradient(135deg, #004D40 0%, #00796B 100%)',
            }
        },
    },
    plugins: [],
}

