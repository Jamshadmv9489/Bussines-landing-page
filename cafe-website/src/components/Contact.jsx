import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-[#f5e6d3] text-center">

            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-[#3b2f2f]"
            >
                Contact Us ☕
            </motion.h2>

            {/* Form */}
            <motion.form
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-12 max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-6"
            >

                {/* Name */}
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-500"
                />

                {/* Email */}
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-500"
                />

                {/* Message */}
                <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-500"
                ></textarea>

                {/* Button */}
                <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-[#3b2f2f] text-white rounded-lg font-semibold shadow-md"
                >
                    Send Message
                </motion.button>

            </motion.form>
        </section>
    );
}