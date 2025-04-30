import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleClick = (url) => {
        navigate(`/${url}`);
    };
    return (
        <div className="bg-white text-black">
            {/* Hero Section */}
            <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-[url('/path-to-your-background.jpg')] bg-cover bg-center bg-no-repeat">
                <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl md:text-7xl font-bold text-[#c59f5d]">
                    Delivering Excellence in Every Bite.
                </motion.h1>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="mt-4 text-lg md:text-2xl max-w-2xl">
                    Premium Quality Nuts & Dried Fruits — Trusted Globally.
                </motion.p>
                <motion.button onClick={() => handleClick("Products")} whileHover={{ scale: 1.1 }} className="mt-8 px-8 py-3 bg-[#c59f5d] text-white font-semibold rounded-2xl shadow-lg">
                    Explore Our Products
                </motion.button>
            </section>

            {/* About Preview */}
            <section className="py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10 bg-[#f9f9f9] ">
                <div className="flex-1">
                    <h2 className="text-4xl font-bold mb-6 text-[#c59f5d]">Who We Are</h2>
                    <p className="text-lg leading-7 text-[#333333]">
                        We are committed to sourcing the finest nuts and dried fruits from around the world, ensuring every product reflects unmatched quality, freshness, and taste. Our dedication to excellence has made us a trusted name across global markets.
                    </p>
                    <button onClick={() => handleClick("About")} className="mt-6 px-6 py-2 bg-[#c59f5d] text-white font-semibold rounded-xl">
                        Learn More
                    </button>
                </div>
                <div className="flex-1">
                    <img src="/path-to-about-image.jpg" alt="About Us" className="rounded-2xl shadow-lg" />
                </div>
            </section>

            {/* Products Highlights */}
            <section className="py-20 px-6 md:px-20 bg-white">
                <h2 className="text-4xl font-bold text-center text-[#c59f5d] mb-12">Our Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {['Almonds', 'Walnuts', 'Apricots'].map((item, index) => (
                        <div key={index} className="bg-[#f9f9f9] p-8 rounded-2xl shadow-lg text-center">
                            <img src={`/path-to-${item.toLowerCase()}.jpg`} alt={item} className="h-40 mx-auto mb-6 rounded-xl object-cover" />
                            <h3 className="text-2xl font-semibold mb-4">{item}</h3>
                            <button className="px-4 py-2 bg-[#c59f5d] text-white rounded-xl font-medium">
                                View More
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 px-6 md:px-20 bg-[#f9f9f9]">
                <h2 className="text-4xl font-bold text-center text-[#c59f5d] mb-12">Why Choose Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        { title: 'Quality', desc: 'Top priority sourcing and full traceability integration.' },
                        { title: 'Reliability', desc: 'Proven reputation and proper timely execution.' },
                        { title: 'Service', desc: 'Strategic sourcing and flexible market solutions.' },
                    ].map((item, index) => (
                        <div key={index} className="bg-white border border-[#c59f5d] p-8 rounded-2xl text-center">
                            <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                            <p className="text-lg text-[#333]">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-6 md:px-20 bg-white text-center">
                <h2 className="text-4xl font-bold text-[#c59f5d] mb-12">What Our Customers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-[#f9f9f9] p-8 rounded-2xl shadow-lg">
                            <p className="italic text-[#333]">"Absolutely the freshest and best quality nuts! Highly recommend."</p>
                            <h4 className="mt-4 font-semibold text-black">- Happy Customer</h4>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 px-6 md:px-20 flex flex-col justify-center items-center bg-[#f9f9f9]">
                <h2 className="text-4xl font-bold text-center text-[#c59f5d] mb-6">Ready to Taste Excellence?</h2>
                <motion.button onClick={() => handleClick("Contact")} whileHover={{ scale: 1.1 }} className="px-10 py-4 bg-[#c59f5d] text-white font-bold rounded-2xl shadow-lg">
                    Contact Us
                </motion.button>
            </section>
        </div>
    );
};

export default Home;
