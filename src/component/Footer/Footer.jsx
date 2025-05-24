import React from 'react';

const Footer = () => {
    return (
        <div className='mt-[480px] '>
            <div>
                <h2 className='text-black font-bold text-2xl mb-3'>Gadget Heaven</h2>
                <p className='text-[#09080fbb]  '>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div class="divider "></div>
            <footer className="footer  text-neutral-content p-10 flex flex-row justify-evenly ">
  <nav className='text-[#09080fa5] font-medium  '>
    <h6 className="text-xl font-bold text-[#09080F] mb-3 ">Services</h6>
    <a className="link link-hover ">Product Support</a>
    <a className="link link-hover">Order Tracking</a>
    <a className="link link-hover">Shipping & Delivery</a>
    <a className="link link-hover">Returns</a>
  </nav>
  <nav className='text-[#09080fa5] font-medium  '>
    <h6 className="text-xl font-bold text-[#09080F] mb-3">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Contact</a>
   


  </nav>
  <nav className='text-[#09080fa5] font-medium  ' >
    <h6 className="text-xl font-bold text-[#09080F] mb-3 ">Legal</h6>
    <a className="link link-hover"> Terms of Service</a>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Cookie Policy</a>
  </nav>
</footer>

        </div>
    );
};

export default Footer;