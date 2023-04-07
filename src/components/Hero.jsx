import React, { useEffect } from "react";
import bg from "../assets/bg.png";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg4.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="carousel w-full h-[510px] mt-6">
      <div id="slide1" className="carousel-item relative w-full">
      <div className="flex items-center gap-9 justify-between">
                  <div className="w-1/2 text-left" data-aos="fade-left" data-aos-duration="2000">
                      <p className="text-left mb-2">Shop Latest Design</p>
                      <h1 className="font-semibold text-5xl capitalize text-left leading-normal text-white" >Shop for daimond <br></br> silver rings</h1>
                      <button className="text-left px-7 rounded-md text-black font-semibold py-3 bg-primary mt-4 hover:bg-neutral-content transition-colors">Shop Now</button>
                  </div>
          <div className="w-1/2" data-aos="fade-right" data-aos-duration="2000">
            <img src={bg2} className="w-full" />
          </div>
        </div>
        <div className="absolute flex justify-start gap-3 transform -translate-y-1/2 left-0 right-0 bottom-10" data-aos="fade-right" data-aos-duration="1000">
          <a href="#slide3" className="btn px-6">
            ❮
          </a>
          <a href="#slide2" className="btn px-6">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
      <div className="flex items-center justify-between">
                  <div className="w-1/2 text-left" data-aos="fade-left" data-aos-duration="2000">
                      <p className="text-left mb-2">Shop Latest Design</p>
                      <h1 className="font-semibold text-5xl capitalize text-left leading-normal text-white" >For Designer silver <br></br>Earring Sets</h1>
                      <button className="text-left px-7 rounded-md bg-neutral-content text-primary font-semibold py-3  mt-4">Shop Now</button>
                  </div>
          <div className="w-1/2" data-aos="fade-right" data-aos-duration="2000">
            <img src={bg} className="w-full" />
          </div>
        </div>
        <div className="absolute flex justify-start gap-3 transform -translate-y-1/2 left-0 right-0 bottom-10">
          <a href="#slide1" className="btn px-6">
            ❮
          </a>
          <a href="#slide3" className="btn px-6">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
      <div className="flex items-center justify-between">
                  <div className="w-1/2 text-left" data-aos="fade-left" data-aos-duration="2000">
                      <p className="text-left mb-2">Shop Latest Design</p>
                      <h1 className="font-semibold text-5xl capitalize text-left leading-normal text-white" >Shop for daimond <br></br> silver rings</h1>
                      <button className="text-left px-7 rounded-md text-black font-semibold py-3 bg-primary mt-4">Shop Now</button>
                  </div>
          <div className="w-1/2" data-aos="fade-right" data-aos-duration="2000">
            <img src={bg2} className="w-full" />
          </div>
        </div>
        <div className="absolute flex justify-start gap-3 transform -translate-y-1/2 left-0 right-0 bottom-10">
          <a href="#slide2" className="btn px-6">
            ❮
          </a>
          <a href="#slide1" className="btn px-6">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
