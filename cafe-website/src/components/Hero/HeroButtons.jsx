import { motion } from "framer-motion"; // Import animation library

function HeroButtons() {
    return (
        // Animated container for buttons
        <motion.div
            initial={{ opacity: 0, y: 30 }} // Start hidden and slightly down
            animate={{ opacity: 1, y: 0 }} // Fade in and move up
            transition={{ delay: 0.6, duration: 0.8 }} // Delay for smooth entrance
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
            {/* Button to navigate to menu section */}
            <a
                href="#menu"
                className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition"
            >
                View Menu
            </a>

            {/* WhatsApp order button */}
            <a
                href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20order%20from%20Brew%20Haven"
                target="_blank" // Open in new tab
                rel="noopener noreferrer" // Security best practice
                className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 hover:scale-105 transition"
            >
                Order on WhatsApp
            </a>
        </motion.div>
    )
}

export default HeroButtons;