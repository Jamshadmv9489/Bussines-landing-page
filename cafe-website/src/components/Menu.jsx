import { motion } from "framer-motion";

const menuItems = [
    {
        name: "Cappuccino",
        price: "₹120",
        image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg",
    },
    {
        name: "Latte",
        price: "₹140",
        image: "https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg",
    },
    {
        name: "Espresso",
        price: "₹100",
        image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
    },
    {
        name: "Mocha",
        price: "₹160",
        image: "https://images.pexels.com/photos/585750/pexels-photo-585750.jpeg",
    },
];

// Container animation (stagger effect)
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

// Card animation
const card = {
    hidden: { opacity: 0, y: 60, scale: 0.92 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.8, 0.25, 1],
        },
    },
};

export default function Menu() {
    return (
        <section id="menu" className="py-20 bg-[#f5e6d3] text-center">

            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-[#3b2f2f]"
            >
                Our Menu ☕
            </motion.h2>

            {/* Cards */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6 max-w-7xl mx-auto"
            >
                {menuItems.map((item, i) => (
                    <motion.div
                        key={i}
                        variants={card}
                        whileHover={{
                            y: -10,
                            scale: 1.04,
                            boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
                        }}
                        whileTap={{ scale: 0.97 }}
                        className="bg-white rounded-2xl overflow-hidden cursor-pointer"
                    >

                        {/* Image */}
                        <div className="overflow-hidden">
                            <motion.img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-48 object-cover"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.4 }}
                            />
                        </div>

                        {/* Content */}
                        <div className="p-5">
                            <h3 className="text-lg font-semibold text-[#3b2f2f]">
                                {item.name}
                            </h3>
                            <p className="text-yellow-600 font-bold mt-2">
                                {item.price}
                            </p>
                        </div>

                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}