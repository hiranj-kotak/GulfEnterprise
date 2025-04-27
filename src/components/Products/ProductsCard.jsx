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
            className="rounded-2xl shadow-md w-72 py-6 px- flex flex-col items-center hover:scale-105 transform transition">
            {/* Transparent background image */}
            <div className="relative flex flex-col items-center">
                <img src={image} alt={title} className="w-36 h-36 object-contain" />
                {/* Small fake ground shadow under the product */}
                <div className="w-20 h-3 bg-black opacity-10 rounded-full blur-md mt-2"></div>
            </div>

            <h2 className="text-xl font-bold mt-6 text-center">{title}</h2>
            <p className="text-gray-600 mt-2 text-center">{description}</p>
        </div>
    );
};

export default ProductCard;
