import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        AOS.init();
    }, [])
    
    return (
        <>
            <ul className='text-white hidden md:flex items-center font-semibold gap-7 justify-center ' data-aos="fade-down" data-aos-duration="2000">
                <Link to="/">Home</Link>
                <Link to="products">Products</Link>
                <Link to="/" className='text-4xl text-white font-lobster font-light mx-7'>Jewelry</Link>
                <Link to="/aboutus">About Us</Link>
                <Link to="/contactus">Contact Us</Link>
            </ul>
            <div className='md:hidden flex items-center justify-between relative w-full '>
                <Link to="/" className='text-2xl text-white font-lobster font-light mx-7'>Jewelry</Link>
                <ul className={ `${toggle ? "scale-100 transition-transform": "scale-0 transition-transform"} text-white md:hidden flex flex-col items-center font-semibold gap-7 justify-center absolute top-12 right-0 w-1/2 bg-slate-800 z-50 p-4 rounded-md' data-aos="fade-down" data-aos-duration="2000`}>
                <Link onClick={()=>setToggle(!toggle)} to="/">Home</Link>
                <Link onClick={()=>setToggle(!toggle)} to="products">Products</Link>
                <Link onClick={()=>setToggle(!toggle)} to="/aboutus">About Us</Link>
                <Link onClick={()=>setToggle(!toggle)} to="/contactus">Contact Us</Link>
                </ul>
                <div onClick={()=>setToggle(!toggle)} className={` flex items-center flex-col gap-1 cursor-pointer `}>
                    <div className='h-1 w-6 bg-white'></div>
                    <div className='h-1 w-6 bg-white'></div>
                    <div className='h-1 w-6 bg-white'></div>
                    
                </div>
         </div>
        </>
    );
};

export default Navbar;