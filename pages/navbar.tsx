import React from "react";
import Script from "next/script";
import Image from "next/image";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCube,
  EffectCards,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";

// import 'swiper/css/EffectCube';
const navbar = () => {
  return (
    <>
      <section className="nav">
        <div className="navContainer bg-slate-700 flex justify-between items-center truncate h-16">
          {/* logo */}
          <div className="logoContainer ">
            <div className="logo mx-12">logo</div>
          </div>
          {/* navbar  */}
          <div className="nav">
            <nav className="flex  mx-10 ">
              <div className="elem truncate animation-pop hidden absolute my-[4rem] h-62 md:h-auto text-black md:static md:flex  md:w-auto md:bg-transparent  inset-0  bg-slate-700 justify-between">
                <ul className=" md:flex md:space-x-14  text-white text-base mx-8   md:space-y-0 my-4 space-y-4  slide ">
                  <li className="Home">Home</li>
                  <li className="about">about</li>
                  <li className="service">services</li>
                  <li className="portfolio">portfolio</li>
                  <li className="team">Team</li>
                  <li className="contact">contact</li>
                </ul>
              </div>

              <div className="icon md:hidden flex ">
                <Image
                  src="menu.svg"
                  alt=""
                  width={40}
                  height={20}
                  className="ToggleMenu "
                />
              </div>
            </nav>
          </div>
        </div>
      </section>
      <section className="home  bg-slate-600">
        <div className="slider flex flex-col-reverse md:flex-row h-auto  ">
          <div  className="left flex  flex-col justify-center text-center md:text-left md:mx-24 ">
            <div className="content md:text-5xl text-white font-bold md:mx-10 text-3xl  ">
              <h1>We provide </h1>
              <h1>solution</h1>
              <h1>for your business</h1>
            </div>

            <div className="btn block md:flex  my-6  text-1xl md:text-xl font-bold text-white  md:justify-center  md:space-x-6 ">
              <button className="btn1 bg-blue-700 rounded-3xl h-12 w-44  md:w-48 md:rounded-full my-4 md:my-0 mx-4 md:mx-0">
                <span>Get started</span>
              </button>
              <button className="btn2 bg-blue-700 rounded-3xl h-12 w-44  md:w-48 md:rounded-full ">
                <span>Our Serives</span>
              </button>
            </div>
          </div>
          <div className="right  md:block md:mx-18 md:my-10 md:ml-48">
            {/* imageSlider */}
            <Swiper
            
              modules={[
                Navigation,
                Pagination,
                Scrollbar,
                A11y,
                Autoplay,
                EffectCube,
                EffectCards,
              ]}
              slidesPerView={1}
              effect="cards"
              autoplay={{ delay: 1000 }}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <img className="slideImg" src="/team-1.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="slideImg" src="/team-2.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="slideImg" src="/team-3.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="slideImg" src="/team-4.jpg" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <Script src="./script/main.js"></Script>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path className="border-hidden"
            fill="#fff"
            fillOpacity="1"
            d="M0,96L48,101.3C96,107,192,117,288,154.7C384,192,480,256,576,266.7C672,277,768,235,864,218.7C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>
    </>
  );
};

export default navbar;
