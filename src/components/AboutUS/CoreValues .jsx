import React from "react";
import { FaAward, FaHandshake, FaLightbulb } from "react-icons/fa";

const CoreValues = () => {
    const values = [
        {
            icon: <FaAward size={30} className="text-[#c59f5d]" />,
            title: "Excellence",
            description: "We maintain the highest standards in everything we do, ensuring premium quality and service.",
        },
        {
            icon: <FaHandshake size={30} className="text-[#c59f5d]" />,
            title: "Integrity",
            description: "Honesty, transparency, and ethical practices are at the heart of our operations.",
        },
        {
            icon: <FaLightbulb size={30} className="text-[#c59f5d]" />,
            title: "Innovation",
            description: "We continually evolve by embracing creativity and forward-thinking solutions.",
        },
    ];

    return (
        <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#c59f5d]">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {values.map((value, index) => (
                    <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center border border-[#c59f5d]">
                        <div className="mb-4 flex justify-center">{value.icon}</div>
                        <h3 className="text-2xl font-semibold mb-2 text-black">{value.title}</h3>
                        <p className="text-gray-700">{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoreValues;
