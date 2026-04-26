import { motion } from "framer-motion"; // Import animation library
import MenuCard from "./MenuCard"; // Component for each menu item
import { menuItems } from "./MenuData"; // Data for menu items
import { containerVariants } from "./MenuAnimation"; // Animation for container

export default function Menu() {
    return (
        // Menu section with background and spacing
        <section id="menu" className="py-20 bg-[#f5e6d3] text-center">

            {/* Animated section title */}
            <motion.h2
                initial={{ opacity: 0, y: 40 }} // Start hidden
                whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
                transition={{ duration: 0.7, ease: "easeOut" }} // Smooth animation
                viewport={{ once: true }} // Animate once
                className="text-3xl md:text-5xl font-bold text-[#3b2f2f]"
            >
                Our Menu ☕
            </motion.h2>

            {/* Menu cards grid with animation */}
            <motion.div
                variants={containerVariants} // Apply stagger animation
                initial="hidden" // Initial state
                whileInView="show" // Animate when visible
                viewport={{ once: true, amount: 0.1 }} // Trigger when 10% visible
                className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6 max-w-7xl mx-auto"
            >
                {/* Loop through menu items and render cards */}
                {menuItems.map((item, i) => (
                    <MenuCard key={i} item={item} /> // Individual card
                ))}
            </motion.div>

        </section>
    );
}