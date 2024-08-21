import { motion } from 'framer-motion';
import React from 'react';
import { FiArrowUpRight, FiLinkedin } from 'react-icons/fi';
import { RiDribbbleLine } from 'react-icons/ri';
import image2 from '../../../public/image2.png'
import { SiInstagram } from 'react-icons/si';

export default function Homepage() {
  return (
    <div className="flex flex-col">

      <div className="px-10 flex flex-col justify-between h-[835px] pb-10">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          src="big.png"
          className="w-fit shadow-lg rounded-lg"
          alt="Navbar"
        />
        <div className="flex justify-between items-center mt-8">
          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="uppercase font-bold leading-tight text-4xl"
          >
            Design Studio Based in Osaka — Tokyo
          </motion.h4>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="border-white border-2 px-5 py-2 rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-white hover:text-black transition-all uppercase"
          >
            Get in touch <FiArrowUpRight size={24} />
          </motion.button>
        </div>
      </div>

      <div className="flex flex-col px-10 py-20">
        <h1 className="uppercase font-bold text-[100px] tracking-tight leading-tight">
          Pixel Obsession
        </h1>
        <h1 className="uppercase font-bold text-[#565656] text-[100px] tracking-tight leading-tight">
          — since
        </h1>
        <h1 className="uppercase font-bold text-[#565656] text-[100px] tracking-tight leading-tight flex items-center gap-5">
          1996 <img src={image2} alt="1996" className="w-16" />
        </h1>
      </div>

      <div className="px-10 flex flex-col gap-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="uppercase text-[100px] font-bold">Works</h2>
          <p className="font-light text-[42px] text-[#B6B6B6] w-[478px]">
            Photographer Based in Osaka — Tokyo
          </p>
        </div>
        <div className="flex flex-col gap-24 w-full items-center">
          <img src="Card (1).png" alt="Work1" className="transition-transform transform hover:scale-105 hover:shadow-lg" />
          <img src="Card (2).png" alt="Work2" className="transition-transform transform hover:scale-105 hover:shadow-lg" />
          <img src="Card (3).png" alt="Work3" className="transition-transform transform hover:scale-105 hover:shadow-lg" />
          <img src="Card (4).png" alt="Work4" className="transition-transform transform hover:scale-105 hover:shadow-lg" />
          <button className="border-2 border-[#646467]/50 uppercase py-2 leading-8 font-semibold tracking-wider flex rounded-full justify-center items-center gap-2 hover:bg-[#646467]/10 transition-all">
            View All Works <FiArrowUpRight size={24} />
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-20 justify-center py-20">
        <p className="font-bold text-[100px] text-white text-center leading-tight w-full max-w-screen-xl">
          Photographer Based in Osaka — Tokyo
        </p>
        <div className="flex items-center w-full max-w-screen-xl justify-between">
          <div className="flex flex-col gap-6">
            <p className="uppercase flex gap-5 items-center leading-[98px] font-bold text-[100px] text-white">
              <img src="image1.png" alt="Art" className="w-24" /> Art
            </p>
            <p className="uppercase flex gap-5 items-center font-light leading-[98px] text-[100px]">
              Fashion
            </p>
            <p className="uppercase flex gap-5 items-center font-light leading-[98px] text-[100px]">
              Music
            </p>
            <p className="uppercase flex gap-5 items-center font-light leading-[98px] text-[100px]">
              Cinema
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="uppercase flex gap-5 items-center font-light leading-[98px] text-[100px]">
              Business
            </p>
            <p className="uppercase flex gap-5 items-center font-light leading-[98px] text-[100px]">
              Fashion
            </p>
            <p className="uppercase flex gap-5 items-center font-light leading-[98px] text-[100px]">
              Music
            </p>
            <p className="uppercase flex gap-5 items-center font-light leading-[98px] text-[100px]">
              Cinema
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-t-[#646467]/50 pl-10 flex justify-between items-center py-10">
        <img
          src="big.png"
          className="pt-10 pr-[110px] pb-[146px] border-r w-[389px]"
          alt="Logo"
        />
        <div className="flex flex-col w-full mt-auto">
          <div className="flex justify-end items-end pr-10 pb-10 border-b">
            <h4 className="uppercase font-light leading-tight text-2xl text-white">
              hello@ <br /> blurr.io
            </h4>
          </div>
          <div className="flex justify-between items-center p-10">
            <div className="flex items-center gap-6">
              <SiInstagram color="#646467" size={24} />
              <RiDribbbleLine color="#646467" size={24} />
              <FiLinkedin color="#646467" size={24} />
            </div>
            <h2 className="font-light text-lg leading-[32px] text-[#646467]">
              © 2024
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
