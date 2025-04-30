import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ image, title, description }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product`);
    };

    return (
        <div
            onClick={handleClick}
            className="cursor-pointer w-72 rounded-2xl shadow-lg bg-white border border-[#c59f5d] hover:shadow-xl transition-transform transform hover:scale-105 p-5 flex flex-col items-center"
        >
            {/* Product Image */}
            <div className="relative">
                <img src={image} alt={title} className="w-36 h-36 object-contain" />
                <div className="w-20 h-3 bg-black opacity-10 rounded-full blur-md mt-2 mx-auto" />
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold mt-5 text-center text-[#c59f5d]">
                {title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 mt-2 text-center text-sm px-2">
                {description}
            </p>

            {/* Button (optional for detail navigation) */}

            <button
                onClick={handleClick}
                className="mt-4 px-4 py-2 bg-[#c59f5d] text-white rounded-full text-sm hover:bg-[#a68143] transition"
            >
                View More
            </button>

        </div>
    );
};

export default ProductCard;
