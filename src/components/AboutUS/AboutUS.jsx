import React from "react";
import { motion } from "framer-motion";
import EvolutionTimeline from "./EvolutionTimeline";
import CoreValues from "./CoreValues ";

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const AboutUs = () => {
    return (
        <div className="bg-white text-gray-800 px-6 md:px-20 py-12 space-y-20">

            {/* Who Are We */}
            <motion.section
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-center space-y-6"
            >
                <h1 className="text-4xl font-bold text-[#c59f5d]">Who Are We</h1>
                <p className="text-lg max-w-3xl mx-auto">
                    At <span className="font-semibold">[Your Brand Name]</span>, we believe in delivering more than just products — we deliver experiences.
                    With a strong commitment to quality, innovation, and customer satisfaction, we are a team of passionate individuals driven to make a positive impact.
                </p>
            </motion.section>

            {/* Stylish Divider */}
            <div className="border-t border-[#c59f5d] mx-auto w-1/2"></div>

            {/* Evolution Timeline */}
            <motion.section
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <EvolutionTimeline />
            </motion.section>

            {/* Stylish Divider */}
            <div className="mt-20 border-t border-[#c59f5d] mx-auto w-1/2"></div>

            {/* Vision Statement */}
            <motion.section
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-[#fafafa] py-12 rounded-2xl shadow-inner text-center space-y-6"
            >
                <h2 className="text-3xl font-bold text-[#c59f5d]">Vision Statement</h2>
                <p className="text-lg max-w-3xl mx-auto">
                    Our vision is to become a globally recognized brand known for excellence, integrity, and innovation,
                    creating value for our customers, communities, and stakeholders.
                </p>
            </motion.section>

            {/* Stylish Divider */}
            <div className="border-t border-[#c59f5d] mx-auto w-1/2"></div>

            {/* Mission Statement */}
            <motion.section
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-center space-y-6"
            >
                <h2 className="text-3xl font-bold text-[#c59f5d]">Mission Statement</h2>
                <p className="text-lg max-w-3xl mx-auto">
                    Our mission is to deliver top-quality products and services that exceed expectations,
                    nurture long-term relationships, and drive continuous improvement in everything we do.
                </p>
            </motion.section>

            {/* Stylish Divider */}
            <div className="border-t border-[#c59f5d] mx-auto w-1/2"></div>

            {/* Core Values */}
            <motion.section
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <CoreValues />
            </motion.section>

        </div>
    );
};

export default AboutUs;
