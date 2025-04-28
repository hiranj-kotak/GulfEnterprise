import React from 'react';
import productImage from './image.png'; // 🥥 Your transparent dry coconut image

const HeaderSection = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-15 p-10">
            {/* Image Box */}
            <div className=" rounded-2xl p-6 shadow-md flex flex-col items-center">
                <img src={productImage} alt="Dry Coconut" className="w-64 h-64 object-contain" />
                <div className="w-20 h-3 bg-black opacity-10 rounded-full blur-md mt-2"></div> {/* Soft shadow */}
            </div>

            {/* Content */}
            <div className="max-w-md">
                <h1 className="text-3xl font-bold mb-4">Dry Coconut</h1>
                <p className="text-gray-600 mb-6">
                    Premium quality dry coconuts sourced from the best farms. Packed with nutrition and natural freshness.
                </p>
                <button className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition">
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default HeaderSection;
