import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="overflow-hidden rounded-2xl shadow-lg"
                >
                    <motion.img
                        src="https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg"
                        alt="Coffee"
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                    />
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#3b2f2f]">
                        About Our Coffee ☕
                    </h2>

                    <p className="mt-5 text-gray-600 leading-relaxed">
                        We serve handcrafted coffee made from the finest beans sourced
                        from around the world. Every cup is brewed with passion,
                        delivering rich aroma and unforgettable taste.
                    </p>

                    <p className="mt-4 text-gray-600 leading-relaxed">
                        Whether you're looking for a quick espresso or a relaxing latte,
                        our café offers a cozy space to enjoy every moment.
                    </p>

                    {/* Button */}
                    <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6 px-6 py-3 bg-[#3b2f2f] text-white rounded-full font-semibold shadow-md"
                    >
                        Learn More
                    </motion.button>
                </motion.div>

            </div>
        </section>
    );
}