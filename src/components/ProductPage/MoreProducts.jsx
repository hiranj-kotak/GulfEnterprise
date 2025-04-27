import React from 'react';

const MoreProducts = () => {
    return (
        <div className="py-16">
            <h2 className="text-3xl font-bold text-center mb-10">More Products</h2>
            <div className="flex flex-wrap justify-center gap-8 px-6">
                <ProductCard title="Wet Dates" description="Fresh and delicious wet dates." />
                <ProductCard title="Dry Dates" description="Naturally dried sweet dates." />
            </div>
        </div>
    );
};

const ProductCard = ({ title, description }) => (
    <div className="bg-white rounded-2xl shadow-md w-64 p-6 flex flex-col items-center">
        <div className="w-24 h-24 bg-gray-100 rounded-full mb-4"></div> {/* Placeholder */}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-center">{description}</p>
    </div>
);

export default MoreProducts;
