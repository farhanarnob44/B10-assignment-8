import React from 'react';
import bannerImg from '../../../public/assets/banner.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
 
    return (
  

 <div className='mb-28  '>
               <div className="hero min-h-screen relative">
  <div className="hero-content text-center">
    <div className="">
      <h1 className="text-5xl font-bold text-white mb-6">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
      <p className="py-6 text-[#ffffff8d] mb-4">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
      </p>

     <Link to='/dashboard' >
     <button className="btn bg-white hover:bg-[#9538E2] hover:text-[#FFFFFF]  text-[#9538E2] border-2
       border-[#9538E2] font-bold rounded-full px-7 mb-16 ">Shop Now</button>
     </Link>

    </div>
  </div>
</div>
<div className=' w-[60%] mx-auto rounded-xl  absolute -bottom-[500px] left-[320px]'>
<div className=' border-2 border-white bg-white/25 p-4 rounded-xl'>
<img className='h-fit  w-full rounded-xl ' src={bannerImg} alt="" />

</div>
</div>
 </div>
       
    );
};

export default Banner;