import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {

    useEffect(() => {
        AOS.init();
    }, [])
    
    return (
        <>
            <ul className='text-white flex items-center font-semibold gap-7 justify-center' data-aos="fade-down" data-aos-duration="2000">
                <Link to="/">Home</Link>
                <Link to="products">Products</Link>
                <Link to="/" className='text-4xl text-white font-lobster font-light mx-7'>Jewelry</Link>
                <Link to="/aboutus">About Us</Link>
                <Link to="/contactus">Contact Us</Link>
            </ul>
        </>
    );
};

export default Navbar;