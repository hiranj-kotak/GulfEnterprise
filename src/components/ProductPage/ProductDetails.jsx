import React from 'react';

const ProductDetails = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-start gap-16 p-10">
            {/* Key Features */}
            <div className="max-w-md">
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>100% Pure and Natural Dry Coconuts</li>
                    <li>Rich in Nutrients & Fiber</li>
                    <li>Perfect for cooking, baking, and snacking</li>
                    <li>Long shelf life with natural preservation</li>
                    <li>No preservatives or additives</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Health Benefits</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Boosts Immunity</li>
                    <li>Improves Digestion</li>
                    <li>Good Source of Energy</li>
                    <li>Rich in Antioxidants</li>
                </ul>
            </div>

            {/* Nutrition Facts */}
            <div className="bg-white rounded-lg shadow-md p-6 w-80">
                <h3 className="text-xl font-bold mb-4">Nutrition Facts</h3>
                <div className="text-sm space-y-2 text-gray-700">
                    <p>Serving Size: 28g</p>
                    <p>Calories: 187</p>
                    <p>Fat: 18g</p>
                    <p>Carbohydrates: 7g</p>
                    <p>Fiber: 5g</p>
                    <p>Sugar: 2g</p>
                    <p>Protein: 2g</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
