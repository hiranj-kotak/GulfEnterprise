import React from "react";
import { FaSeedling, FaLeaf, FaTree } from "react-icons/fa";

const EvolutionTimeline = () => {
    const milestones = [
        {
            icon: <FaSeedling size={30} className="text-[#c59f5d]" />,
            title: "Our Humble Beginnings",
            description: "Started with a passion for premium nuts and dried fruits, sourcing the best quality from around the world.",
            year: "2010",
        },
        {
            icon: <FaLeaf size={30} className="text-[#c59f5d]" />,
            title: "Growth & Expansion",
            description: "Expanded operations globally, building trust with customers across various continents.",
            year: "2015",
        },
        {
            icon: <FaTree size={30} className="text-[#c59f5d]" />,
            title: "Global Recognition",
            description: "Became a globally recognized brand, valued for excellence, authenticity, and innovation.",
            year: "2022",
        },
    ];

    return (
        <div className="relative flex flex-col items-center">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-[#c59f5d]">
                Our Evolution
            </h2>

            {/* Timeline Container */}
            <div className="relative w-full max-w-5xl">
                {/* Vertical Line */}
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-1 bg-[#c59f5d]"></div>

                {/* Milestones */}
                <div className="flex flex-col gap-16">
                    {milestones.map((milestone, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                } gap-6 relative`}
                        >
                            {/* Content Card */}
                            <div className="bg-white border border-[#c59f5d] shadow-lg p-6 rounded-2xl w-full md:w-1/2 z-10">
                                <h3 className="text-2xl font-semibold text-black mb-2">{milestone.title}</h3>
                                <p className="text-gray-700">{milestone.description}</p>
                                <p className="text-[#c59f5d] font-bold mt-2">{milestone.year}</p>
                            </div>

                            {/* Icon on the line */}
                            <div className="flex items-center justify-center bg-white border-4 border-[#c59f5d] rounded-full w-16 h-16 absolute left-1/2 transform -translate-x-1/2 z-20">
                                {milestone.icon}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EvolutionTimeline;
