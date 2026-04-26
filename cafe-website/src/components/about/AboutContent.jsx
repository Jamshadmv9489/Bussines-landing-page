import { motion } from "framer-motion"; // Import motion for animations
import { contentVariant } from "./aboutAnimation"; // Import animation variant

export default function AboutContent() {
    return (
        // Animated container for content
        <motion.div
            variants={contentVariant} // Apply animation variants
            initial="hidden" // Initial state before appearing
            whileInView="show" // Animate when in viewport
            viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% visible
        >
            {/* Section heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#3b2f2f]">
                About Our Coffee ☕
            </h2>

            {/* First paragraph */}
            <p className="mt-5 text-gray-600 leading-relaxed">
                We serve handcrafted coffee made from the finest beans sourced
                from around the world. Every cup is brewed with passion,
                delivering rich aroma and unforgettable taste.
            </p>

            {/* Second paragraph */}
            <p className="mt-4 text-gray-600 leading-relaxed">
                Whether you're looking for a quick espresso or a relaxing latte,
                our café offers a cozy space to enjoy every moment.
            </p>

            {/* Animated button with hover and tap effects */}
            <motion.button
                whileHover={{ scale: 1.08 }} // Slight zoom on hover
                whileTap={{ scale: 0.95 }} // Shrink on click
                className="mt-6 px-6 py-3 bg-[#3b2f2f] text-white rounded-full font-semibold shadow-md"
            >
                Learn More
            </motion.button>
        </motion.div>
    );
}