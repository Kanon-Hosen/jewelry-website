import React, { useEffect } from "react";

import banner from "../assets/Sub-banner-01-removebg-preview.png";
import banner2 from "../assets/Sub-banner-02-removebg-preview.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 my-10">
        <div className=" flex relative border rounded-md  p-2" data-aos="fade-right" data-aos-duration="1000">
        <img src={banner} alt="" />
        <div className="absolute transform -translate-y-1/2  right-10 text-left top-1/2">
          <h1 className="font-semibold md:text-2xl text-white capitalize">Shop for sliver<br></br> ring's</h1>
          <button className="underline hover:text-white transition-colors text-neutral-content uppercase mt-5 text-sm font-semibold">Shop now</button>
        </div>
      </div>
      <div className=" flex relative border rounded-md p-2" data-aos="fade-left" data-aos-duration="1000">
        <img src={banner2} alt="" />
        <div className="absolute transform -translate-y-1/2  right-10 text-left top-1/2">
          <h1 className="font-semibold md:text-2xl text-white capitalize">Shop for sliver<br></br> pendent</h1>
          <button className="underline hover:text-white transition-colors text-neutral-content uppercase mt-5 text-sm font-semibold">Shop now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
