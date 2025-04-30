import React from 'react'
import HeaderSection from './HeaderSection.jsx'
import FeaturesRow from './FeaturesRow.jsx'
import ProductDetails from './ProductDetails.jsx'
import MoreProducts from './MoreProducts.jsx'

function ProductPage() {
    return (
        <div className="text-gray-800">
            <HeaderSection />
            <FeaturesRow />
            <div className="border-t border-gray-200 my-16"></div>
            <ProductDetails />
            <div className="border-t border-gray-200 my-16"></div>
            <MoreProducts />
        </div>
    )
}

export default ProductPage;