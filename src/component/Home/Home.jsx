import React from 'react';
import Banner from '../Banner/Banner';
import Gadgets from '../Gadgets/Gadgets';
import { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        document.title = "Home"; // Set the title dynamically
      }, []);

    return (
        <div className='' >
          
            
            <Gadgets></Gadgets>
        </div>
    );
};

export default Home;