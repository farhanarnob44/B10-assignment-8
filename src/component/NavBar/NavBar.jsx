import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar = () => {
 
  
    const links =
    <>
    
   <div className='flex flex-row items-center gap-5 text-[#0b0b0ba2] font-medium text-sm'>
   <button className='hover:decoration hover:underline text-sm '>
        <NavLink to="/" > Home </NavLink>
    </button>
<NavLink to='/statistics' >
<li className='text-sm hover:decoration hover:underline'> Statistics </li>

  </NavLink>    
    <button className='hover:decoration hover:underline text-sm ' ><NavLink to="/dashboard" > Dashboard </NavLink></button>
   </div>
    
    </>


    return (
        <div className="navbar w-[90%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}

            </ul>
          </div>
          <h3 className="btn btn-ghost text-2xl font-bold text-black"  >Gadget Heaven</h3>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">

        {links}

          </ul>
        </div>
        <div className="navbar-end gap-3">
          <a className="btn "><i class="fa-solid fa-cart-shopping"></i>

          </a>
          <a className="btn"><i class="fa-regular fa-heart"></i>


          </a>
        </div>
      </div>
    );
};

export default NavBar;