import React from 'react';
import ProductCard from './ProductsCard.jsx';
import image from './image.png'; // Replace with actual images or use dynamic ones

const productList = [
    {
        title: "Dry Coconut",
        description: "Premium quality dry coconuts, naturally sun-dried.",
        image: image,
    },
    {
        title: "Wet Dates",
        description: "Fresh and juicy wet dates, harvested with care.",
        image: image,
    },
    {
        title: "Freeze Dried Pineapple",
        description: "Tangy and sweet freeze-dried pineapple bites.",
        image: image,
    },
    {
        title: "Golden Raisins",
        description: "Sun-kissed golden raisins rich in taste and nutrients.",
        image: image,
    },
    {
        title: "Roasted Cashews",
        description: "Lightly salted, crunchy, and premium roasted cashews.",
        image: image,
    },
    {
        title: "Almonds (California)",
        description: "Imported California almonds – perfect for snacking.",
        image: image,
    },
    {
        title: "Fig (Anjeer)",
        description: "Naturally dried figs rich in fiber and antioxidants.",
        image: image,
    },
    {
        title: "Pistachios",
        description: "Roasted pistachios with a hint of Himalayan salt.",
        image: image,
    },
];

const Products = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-12">
            <h1 className="text-4xl font-bold text-center text-[#c59f5d] mb-12">Our Products</h1>
            <div className="flex flex-wrap justify-center gap-10">
                {productList.map((product, index) => (
                    <ProductCard
                        key={index}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;
