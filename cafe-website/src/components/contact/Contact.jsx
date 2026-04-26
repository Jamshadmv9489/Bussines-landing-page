import { motion } from "framer-motion"; // Import animation library
import { useContactForm } from "../../hooks/useContactForm"; // Custom hook for form logic

export default function Contact() {
    // Destructure form state and handlers from custom hook
    const { form, setForm, loading, handleSubmit, errors, setErrors } =
        useContactForm();

    return (
        // Contact section with background and spacing
        <section id="contact" className="py-20 bg-[#f5e6d3] text-center">

            {/* Animated Title */}
            <motion.h2
                initial={{ opacity: 0, y: 40 }} // Start hidden and slightly down
                whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
                transition={{ duration: 0.7, ease: "easeOut" }} // Smooth animation
                viewport={{ once: true }} // Animate only once
                className="text-3xl md:text-5xl font-bold text-[#3b2f2f]"
            >
                Contact Us ☕
            </motion.h2>

            {/* Animated Form */}
            <motion.form
                onSubmit={handleSubmit} // Handle form submission
                noValidate // Disable default browser validation
                initial={{ opacity: 0, y: 50 }} // Start hidden
                whileInView={{ opacity: 1, y: 0 }} // Animate into view
                transition={{ duration: 0.7, delay: 0.2 }} // Slight delay
                viewport={{ once: true }}
                className="mt-12 max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-6"
            >

                {/* Name Input */}
                <div>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={form.name} // Bind value to state
                        onChange={(e) => {
                            setForm({ ...form, name: e.target.value }); // Update name
                            setErrors((prev) => ({ ...prev, name: "" })); // Clear error
                        }}
                        className={`w-full p-3 border rounded-lg outline-none focus:ring-2 ${errors.name
                                ? "border-red-500 focus:ring-red-500" // Error style
                                : "border-gray-300 focus:ring-yellow-500" // Normal style
                            }`}
                    />
                    {/* Show error if exists */}
                    {errors.name && (
                        <p className="text-red-500 text-sm text-left mt-1">
                            {errors.name}
                        </p>
                    )}
                </div>

                {/* Email Input */}
                <div>
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={(e) => {
                            setForm({ ...form, email: e.target.value }); // Update email
                            setErrors((prev) => ({ ...prev, email: "" })); // Clear error
                        }}
                        className={`w-full p-3 border rounded-lg outline-none focus:ring-2 ${errors.email
                                ? "border-red-500 focus:ring-red-500"
                                : "border-gray-300 focus:ring-yellow-500"
                            }`}
                    />
                    {/* Email error message */}
                    {errors.email && (
                        <p className="text-red-500 text-sm text-left mt-1">
                            {errors.email}
                        </p>
                    )}
                </div>

                {/* Message Input */}
                <div>
                    <textarea
                        rows="4"
                        placeholder="Your Message"
                        value={form.message}
                        onChange={(e) => {
                            setForm({ ...form, message: e.target.value }); // Update message
                            setErrors((prev) => ({ ...prev, message: "" })); // Clear error
                        }}
                        className={`w-full p-3 border rounded-lg outline-none focus:ring-2 ${errors.message
                                ? "border-red-500 focus:ring-red-500"
                                : "border-gray-300 focus:ring-yellow-500"
                            }`}
                    />
                    {/* Message error */}
                    {errors.message && (
                        <p className="text-red-500 text-sm text-left mt-1">
                            {errors.message}
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <motion.button
                    type="submit"
                    disabled={loading} // Disable while submitting
                    whileHover={{ scale: 1.08 }} // Hover effect
                    whileTap={{ scale: 0.95 }} // Click effect
                    className="w-full py-3 bg-[#3b2f2f] text-white rounded-lg font-semibold shadow-md disabled:opacity-60"
                >
                    {loading ? "Sending..." : "Send Message"} {/* Dynamic text */}
                </motion.button>

            </motion.form>
        </section>
    );
}