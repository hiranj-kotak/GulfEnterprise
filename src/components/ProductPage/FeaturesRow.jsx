import React from 'react';
import { FaLeaf, FaCheckCircle, FaSeedling, FaAward } from 'react-icons/fa';

const FeaturesRow = () => {
    return (
        <div className="bg-black text-white flex flex-wrap justify-around gap-10 py-5 px-20">
            <Feature icon={<FaLeaf size={30} />} title="100% Natural" />
            <Feature icon={<FaCheckCircle size={30} />} title="Premium Quality" />
            <Feature icon={<FaSeedling size={30} />} title="No Chemicals" />
            <Feature icon={<FaAward size={30} />} title="Trusted Source" />
        </div>
    );
};

const Feature = ({ icon, title }) => (
    <div className="flex flex-col items-center text-center">
        <div className="text-[#c59f5d] mb-2">{icon}</div>
        <p className="font-semibold">{title}</p>
    </div>
);

export default FeaturesRow;