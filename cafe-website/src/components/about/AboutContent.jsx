import { motion } from "framer-motion"; // Import motion for animations
import { contentVariant } from "./aboutAnimation"; // Import animation variant

export default function AboutContent() {
    return (
        // Animated container for content
        <motion.div
            variants={contentVariant} // Apply animation variants
            whileInView="show" // Animate when in viewport
            viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% visible
        >
            {/* Section heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#3b2f2f]">
                About Our Coffee ☕
            </h2>

            {/* First paragraph */}
            <motion.p
                initial={{ opacity: 0, y: 40 }}   // start position
                whileInView={{ opacity: 1, y: 0 }} // end position
                transition={{ duration: 0.5 }}     // speed
                viewport={{ once: true }}          // animate only once
                className="mt-5 text-gray-600 leading-relaxed"
            >
                We serve handcrafted coffee made from the finest beans sourced
                from around the world. Every cup is brewed with passion,
                delivering rich aroma and unforgettable taste.
            </motion.p>

            {/* Second paragraph */}
            <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-4 text-gray-600 leading-relaxed"
            >
                Whether you're looking for a quick espresso or a relaxing latte,
                our café offers a cozy space to enjoy every moment.
            </motion.p>

            {/* Animated button with hover and tap effects */}
            <motion.button
                initial={{ opacity: 0, y: 40 }}     // start below
                whileInView={{ opacity: 1, y: 0 }}  // slide up
                transition={{ duration: 0.5, delay: 0.3 }} // delay after text
                viewport={{ once: true }}

                whileHover={{ scale: 1.08 }} // hover zoom
                whileTap={{ scale: 0.95 }}   // click effect

                className="mt-6 px-6 py-3 bg-[#3b2f2f] text-white rounded-full font-semibold shadow-md"
            >
                Learn More
            </motion.button>
        </motion.div>
    );
}