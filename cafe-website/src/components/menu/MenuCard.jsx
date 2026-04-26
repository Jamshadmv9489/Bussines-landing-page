import { motion } from "framer-motion"; // Import animation library
import { cardVariants } from "./MenuAnimation"; // Import card animation

export default function MenuCard({ item }) {
    return (
        // Animated card container
        <motion.div
            variants={cardVariants} // Apply animation variants
            whileHover={{
                y: -10, // Lift card on hover
                scale: 1.04, // Slight zoom
                boxShadow: "0px 20px 40px rgba(0,0,0,0.15)", // Add shadow
            }}
            whileTap={{ scale: 0.97 }} // Shrink slightly on click
            className="bg-white rounded-2xl overflow-hidden cursor-pointer"
        >
            {/* Image wrapper */}
            <div className="overflow-hidden">
                <motion.img
                    src={item.image} // Image source
                    alt={item.name} // Accessibility text
                    className="w-full h-48 object-cover" // Image styling
                    whileHover={{ scale: 1.1 }} // Zoom image on hover
                    transition={{ duration: 0.4 }} // Smooth animation
                    loading="lazy" // Lazy load for performance
                />
            </div>

            {/* Card content */}
            <div className="p-5">
                {/* Item name */}
                <h3 className="text-lg font-semibold text-[#3b2f2f]">
                    {item.name}
                </h3>

                {/* Item price */}
                <p className="text-yellow-600 font-bold mt-2">
                    {item.price}
                </p>
            </div>
        </motion.div>
    );
}