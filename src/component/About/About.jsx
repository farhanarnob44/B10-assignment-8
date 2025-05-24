import React from 'react';
import { useEffect } from 'react';
const About = () => {
    useEffect(() => {
        document.title = "About"; // Set the title dynamically
      }, []);
    return (
        <div className='bg-white'>
            <h1 className='text-2xl font-bold text-black'>GADGET</h1>
            <p className='text-gray-500 text-sm font-medium mt-4'>GADGET is an often small mechanical or electronic device with a practical use but often thought of as a novelty.</p>
            <div className='w-[80%] mx-auto mt-6 '>
                <img className='rounded-xl border-2 border-gray-400' src="/public/assets/gadget.jpg" alt="" />
            </div>
        </div>
    );
};

export default About;