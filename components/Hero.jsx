"use client";
import Image from "next/image";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Avatar } from "@mui/material";
import Navbar from "./Navbar";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Hero() {
  return (
    <section
      id="hero"
      className={` relative w-full h-screen mb-5 pb-3 overflow-clip`}
    >
      {/* <Navbar /> */}
      <div className="w-full h-screen absolute place-items-end items-end inset-0">
        <img
          className="pl-[800px] pb-0 h-screen object-cover opacity-30"
          src="/hermandp.png"
          alt="herman dp"
        />
      </div>
      <div className="flex flex-row justify-start pl-9 items-center align-middle w-full h-screen bg-gradient-to-r from-[#435996] to-[#ceeeeb] text-white">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold">
            Hello I'm Herman Athor Galabuzi
          </h1>
          <h4 className="text-2xl md:3xl py-3 font-semibold">
            Frontend Web Developer
          </h4>
          <p className=" max-w-md md:max-w-2xl md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            exercitationem consequatur quisquam ullam, dolorum assumenda rerum
            beatae tenetur tempore architecto magnam ex iusto dolores,
            laudantium velit sequi alias laboriosam deserunt!
          </p>
          <div className="flex flex-row gap-3 ">
            <a
              href="/Herman's Reseme.pdf"
              download={"Herman_CV"}
              className="bg-white text-black font-semibold px-10 py-4 border-none text-lg text-center rounded-full  mt-6 hover:animate-pulse animate__animated animate__bounce"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="bg-black text-white font-semibold px-10 py-4 border-none text-lg text-center rounded-full  mt-6 hover:animate-pulse animate__animated animate__bounce"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-8 space-x-4 text-7xl">
            <TwitterIcon
              fontSize="large"
              className=" hover:text-blue-400 cursor-pointer hover:text-7xl"
            />
            <FacebookIcon
              fontSize="large"
              className=" hover:text-blue-400 cursor-pointer hover:text-7xl"
            />
            <InstagramIcon
              fontSize="large"
              className=" hover:text-blue-400 cursor-pointer hover:text-7xl "
            />
            <LinkedInIcon
              fontSize="large"
              className=" hover:text-blue-400 cursor-pointer hover:text-7xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

//  <div className=" pl-10">
//         <div className="w-full text-white flex  justify-center items-center md:justify-start md:items-baseline h-screen flex-col ">
//           {/* <Avatar
//             src="/hermandp.png"
//             alt="herman"
//             sx={{ width: 100, height: 100 }}
//           /> */}
//           <AnimationOnScroll animateIn="animate__fadeInUp">
//             <h1 className="text-2xl text-center">Hi I'm</h1>
//           </AnimationOnScroll>
//           <AnimationOnScroll animateIn="animate__lightSpeedInRight">
//             <h1 className=" text-7xl animate__lightSpeedInRight">
//               Herman Athor
//             </h1>
//           </AnimationOnScroll>
//           <AnimationOnScroll animateIn="animate__slideInUp">
//             <p className="mt-4 mb-4 text-3xl text-center z-40 md:w-1/2">
//               I am a front End Developer based in Copenhagen,Denmark I build
//               things for the web, I enjoy working on a every aspect of web
//               development to give user the best experience when they visit your
//               site.
//             </p>
//           </AnimationOnScroll>
//           <a
//             href="/Herman_Athor's_CV.pdf"
//             download={"Herman_CV"}
//             className="bg-white text-black font-semibold px-10 py-4 border-none text-lg text-center rounded-full  mt-6 hover:animate-pulse animate__animated animate__bounce"
//           >
//             Reseme
//           </a>
//           <div className="mt-8 space-x-4 text-7xl">
//             <TwitterIcon
//               fontSize="large"
//               className=" hover:text-blue-400 cursor-pointer hover:text-7xl"
//             />
//             <FacebookIcon
//               fontSize="large"
//               className=" hover:text-blue-400 cursor-pointer hover:text-7xl"
//             />
//             <InstagramIcon
//               fontSize="large"
//               className=" hover:text-blue-400 cursor-pointer hover:text-7xl "
//             />
//             <LinkedInIcon
//               fontSize="large"
//               className=" hover:text-blue-400 cursor-pointer hover:text-7xl"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="hidden md:flex absolute bottom-0 right-[-20px] z-20 opacity-30 hover:opacity-100">
//         <Avatar
//           className=" object-cover w-[700px] h-[700px] bg-white"
//           alt="Herman Athor"
//           src={"/hermandp.png"}
//         />
//       </div>
