import React from 'react';

const MoreProducts = () => {
    return (
        <div className="relative bg-[#f9f9f9] text-white pt-16 pb-20">
            <h2 className="text-3xl font-bold text-center mb-10 text-[#c59f5d]">More Products</h2>
            <div className="flex flex-wrap justify-center gap-8 px-6">
                <ProductCard title="Wet Dates" description="Fresh and delicious wet dates." />
                <ProductCard title="Dry Dates" description="Naturally dried sweet dates." />
            </div>

            {/* Wave Separator at bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] translate-y-full">
                <svg className="relative block w-full h-[40px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 40">
                    <path d="M0,0 C600,80 600,-40 1200,0 L1200,40 L0,40 Z" fill="#000" />
                </svg>
            </div>
        </div>
    );
};

const ProductCard = ({ title, description }) => (
    <div className="bg-white border border-[#c59f5d] rounded-2xl shadow-md w-64 p-6 flex flex-col items-center">
        <div className="w-24 h-24 bg-gray-700 rounded-full mb-4"></div> {/* Placeholder */}
        <h3 className="text-xl font-bold mb-2 text-[#c59f5d]">{title}</h3>
        <p className="text-black text-center">{description}</p>
    </div>
);

export default MoreProducts;
