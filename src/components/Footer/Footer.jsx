import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

                {/* Contact Us */}
                <div>
                    <h2 className="text-xl font-bold mb-4 text-white">Contact Us</h2>
                    <div className="space-y-3 text-sm">
                        <div className="flex items-start">
                            <span className="mr-2 text-blue-400">
                                📍
                            </span>
                            <p>
                                Gulf Enterprise,<br />
                                Grain Market, C-45 - Chamber Road,<br />
                                Gujarat 361001
                            </p>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2 text-blue-400">
                                📞
                            </span>
                            <p>+91-98242 24780</p>
                        </div>
                        <div className="flex items-start">
                            <span className="mr-2 text-blue-400">
                                📧
                            </span>
                            <p>
                                support@gmail.com
                            </p>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-bold mb-4 text-white">Quick Links</h2>
                    <nav>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-blue-400 transition duration-300">Home</Link></li>
                            <li><Link to="/About" className="hover:text-blue-400">About Us</Link></li>
                            <li><Link to="/Products" className="hover:text-blue-400">Product</Link></li>
                            <li><Link to="/Contact" className="hover:text-blue-400">Contact Us</Link></li>
                        </ul>
                    </nav>
                </div>

                {/* Map */}
                <div>
                    <h2 className="text-xl font-bold mb-4 text-white">Map</h2>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            title="Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.9159509981087!2d70.07476827475422!3d22.4697925367316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39576a9686bbd59b%3A0xfe6e0e507e78e5df!2sGulf%20Enterprise!5e0!3m2!1sen!2sin!4v1745737243974!5m2!1sen!2sin"
                            width="100%"
                            height="200"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
