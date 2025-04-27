import React from 'react';

function Contact() {
    return (
        <div className="w-full min-h-screen bg-white text-gray-800">
            {/* Google Map */}
            <div className="w-full h-[400px]">
                <iframe
                    title="Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.9159509981087!2d70.07476827475422!3d22.4697925367316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39576a9686bbd59b%3A0xfe6e0e507e78e5df!2sGulf%20Enterprise!5e0!3m2!1sen!2sin!4v1745737243974!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            {/* Contact Section */}
            <div className="container mx-auto py-10 px-6 flex flex-col items-center">
                <div className="w-full md:w-3/4 flex flex-col md:flex-row  justify-center gap-10">

                    {/* Left - Contact Info */}
                    <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                        <h2 className="text-2xl font-bold mb-4">Contact us at</h2>
                        <p>Gulf Enterprise,<br />
                            Grain Market, C-45 - Chamber Road,<br />
                            Gujarat 361001</p>

                        <p>Phone: +91-98242 24780</p>
                        <p>Email: <a href="mailto:support@gmail.com" className="text-blue-600 hover:underline">support@gmail.com</a></p>
                    </div>

                    {/* Right - Contact Form */}
                    <form className="w-full md:w-1/2 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="First Name *"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                            <input
                                type="text"
                                placeholder="Last Name *"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>
                        <input
                            type="email"
                            placeholder="Email *"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                        <textarea
                            placeholder="Message"
                            rows="5"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                        ></textarea>
                        <div className="flex justify-center md:justify-end">
                            <button
                                type="submit"
                                className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded font-bold tracking-wide transition"
                            >
                                CONTACT US
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
