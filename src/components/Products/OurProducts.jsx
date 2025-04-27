import React from 'react';
import ProductCard from './ProductsCard.jsx';
import image from './image.png';

// let image = "https://images.pexels.com/photos/915016/pexels-photo-915016.jpeg?auto=compress&cs=tinysrgb&w=600/"

const Products = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-10 px-5">
            <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>
            <div className="flex flex-wrap justify-center gap-8">

                <ProductCard
                    image={image}
                    title="Dry Coconut"
                    description="Premium quality dry coconuts, naturally sun-dried."
                />
                <ProductCard
                    image={image}
                    title="Wet Dates"
                    description="Fresh and juicy wet dates, harvested with care."
                />
                <ProductCard
                    image={image}
                    title="Freeze Dried Pineapple"
                    description="Tangy and sweet freeze-dried pineapple bites."
                />
                <ProductCard
                    image={image}
                    title="Freeze Dried Pineapple"
                    description="Tangy and sweet freeze-dried pineapple bites."
                />
                <ProductCard
                    image={image}
                    title="Freeze Dried Pineapple"
                    description="Tangy and sweet freeze-dried pineapple bites."
                />
                <ProductCard
                    image={image}
                    title="Freeze Dried Pineapple"
                    description="Tangy and sweet freeze-dried pineapple bites."
                />
                <ProductCard
                    image={image}
                    title="Freeze Dried Pineapple"
                    description="Tangy and sweet freeze-dried pineapple bites."
                />
                <ProductCard
                    image={image}
                    title="Freeze Dried Pineapple"
                    description="Tangy and sweet freeze-dried pineapple bites."
                />
                <ProductCard
                    image={image}
                    title="Freeze Dried Pineapple"
                    description="Tangy and sweet freeze-dried pineapple bites."
                />
            </div>
        </div>
    );
};

export default Products;
