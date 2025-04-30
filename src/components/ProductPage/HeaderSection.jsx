import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const thumbnails = [
    '/images/strawberry1.jpg',
    '/images/strawberry2.jpg',
    '/images/strawberry3.jpg',
];

const HeaderSection = () => {
    const [selectedImage, setSelectedImage] = useState(thumbnails[0]);

    return (
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 py-12 px-6 md:px-20 bg-white text-gray-900">

            {/* Left: Thumbnails + Main Image */}
            <div className="flex gap-6 mr-10">
                {/* Thumbnails */}
                <div className="flex flex-col gap-3">
                    {thumbnails.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`thumb-${idx}`}
                            className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 transition ${selectedImage === img ? 'border-[#c59f5d]' : 'border-gray-300 hover:border-[#c59f5d]'
                                }`}
                            onClick={() => setSelectedImage(img)}
                        />
                    ))}
                </div>

                {/* Main Image */}
                <img
                    src={selectedImage}
                    alt="Main Product"
                    className="w-72 h-72 md:w-80 md:h-80 object-contain rounded-xl shadow-md border border-gray-200"
                />
            </div>

            {/* Right: Product Details */}
            <div className="max-w-xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Freeze Dried <span className="text-[#c59f5d]">Strawberries</span>
                </h1>

                {/* Ratings */}
                <div className="flex items-center gap-2 mb-4 text-[#c59f5d]">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-sm" />
                    ))}
                    <span className="text-gray-600 ml-2 text-sm">4.2 (34)</span>
                    <span className="ml-4 text-sm text-[#c59f5d] hover:underline cursor-pointer">
                        Write a Review
                    </span>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                    Our Freeze Dried Strawberries are a perfect blend of taste and nutrition. Made from the
                    finest, handpicked strawberries, these snacks retain all the natural flavors and nutrients
                    of fresh strawberries. The freeze-drying process preserves their vibrant color, intense
                    flavor, and nutritional value, offering you a convenient and healthy snack anytime,
                    anywhere.
                </p>

                {/* CTA Button */}
                <button className="bg-[#c59f5d] text-white text-lg font-semibold px-6 py-3 rounded-full hover:bg-black transition">
                    Where to Buy
                </button>
            </div>
        </div>
    );
};

export default HeaderSection;
