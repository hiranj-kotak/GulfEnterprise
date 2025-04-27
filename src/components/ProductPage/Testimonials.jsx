import React from 'react';

const Testimonials = () => {
    return (
        <div className="bg-white py-16">
            <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Have to Say</h2>
            <div className="flex flex-wrap justify-center gap-8 px-6">
                <TestimonialCard
                    text="The quality of dry coconuts is amazing. Perfect for my daily meals!"
                    name="Amit P."
                />
                <TestimonialCard
                    text="Fresh, natural, and full of flavor. Highly recommend Gulf Enterprise!"
                    name="Fatima S."
                />
            </div>
        </div>
    );
};

const TestimonialCard = ({ text, name }) => (
    <div className="border rounded-lg p-6 max-w-sm shadow-md">
        <p className="text-gray-700 mb-4">"{text}"</p>
        <p className="font-bold text-red-500">{name}</p>
    </div>
);

export default Testimonials;
