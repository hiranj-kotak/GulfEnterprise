import React from 'react';

const products = [
    {
        id: 1,
        name: 'Premium Dates - 500g',
        image: '/images/dates500g.jpg',
        description: 'Rich and sweet premium quality dates.',
    },
    {
        id: 2,
        name: 'Premium Dates - 1kg',
        image: '/images/dates1kg.jpg',
        description: 'Handpicked, naturally sweet dates for daily energy.',
    },
    {
        id: 3,
        name: 'Gift Pack - 750g',
        image: '/images/datesGiftPack.jpg',
        description: 'Beautiful gift packaging for special occasions.',
    },
    {
        id: 4,
        name: 'Organic Dates - 500g',
        image: '/images/organicDates.jpg',
        description: '100% organic, chemical-free delicious dates.',
    },
];

function Products() {
    return (
        <div className="w-full min-h-screen bg-white py-12 px-6">
            <div className="container mx-auto text-center mb-10">
                <h1 className="text-3xl font-bold mb-4">Our Products</h1>
                <p className="text-gray-600">Explore our different packaging options for premium dates.</p>
            </div>

            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map(product => (
                    <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                            <p className="text-gray-600 text-sm">{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
