import React from 'react'
import HeaderSection from './HeaderSection.jsx'
import FeaturesRow from './FeaturesRow.jsx'
import ProductDetails from './ProductDetails.jsx'
import Testimonials from './Testimonials.jsx'
import MoreProducts from './MoreProducts.jsx'

function ProductPage() {
    return (
        <div className=" text-gray-800">
            <HeaderSection />
            <FeaturesRow />
            <ProductDetails />
            {/* <Testimonials /> */}
            <MoreProducts />
        </div>
    )
}

export default ProductPage