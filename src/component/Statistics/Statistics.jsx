import React from 'react';
import { useEffect } from 'react';
const Statistics = () => {
    useEffect(() => {
        document.title = "Statistics"; // Set the title dynamically
      }, []);

    return (
        <div className='flex items-center justify-center mt-20 text-3xl font-bold text-black '>
            <h2>Statistics Page</h2>
        </div>
    );
};

export default Statistics;