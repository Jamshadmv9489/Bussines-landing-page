import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen w-full overflow-hidden">

            {/* 🎥 Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute w-full h-full object-cover"
            >
                <source src="/videos/coffee.mp4" type="video/mp4" />
            </video>

            {/* 🌫️ Overlay (no blur, only dark) */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* ✨ Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 text-white">

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-4xl md:text-6xl font-bold"
                >
                    Brew Haven ☕
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mt-4 text-base sm:text-lg md:text-xl text-white/80"
                >
                    Fresh Coffee. Cozy Vibes.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
                >
                    {/* View Menu */}
                    <a
                        href="#menu"
                        className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition"
                    >
                        View Menu
                    </a>

                    {/* WhatsApp Order */}
                    <a
                        href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20order%20from%20Brew%20Haven"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 hover:scale-105 transition"
                    >
                        Order on WhatsApp
                    </a>
                </motion.div>

            </div>
        </section>
    );
}