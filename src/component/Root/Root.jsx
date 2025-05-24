
import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';

const Root = () => {
  const location = useLocation(); 
  const isHomePage = location.pathname === '/'; 

  return (
    <div className="max-w-[1640px] mx-auto font-sora-font">
      
      {isHomePage ? (
        <div className="bg-[#9538E2] w-full rounded-xl border-8 border-[#F6F6F6] ">
          <NavBar />
          <Banner />
        </div>


      ) :
       (
        <NavBar />
      )}

     
      <div className="w-[100%] mx-auto bg-base-200">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Root;

