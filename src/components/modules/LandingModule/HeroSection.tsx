import Image from "next/image";
import React from "react";
import Herobg from '../../../assets/images/product11.png'
import HeroImage from '../../../assets/images/product14.png'

const HeroSection = () => {
  return<section className="dynamic-x-padding grid grid-cols-12  gap-6" style={{backgroundImage: `url(${Herobg.src})`, opacity:'0.9' }}>
    <article className="col-span-12 md:col-span-6 pt-8 space-y-2 md:space-y-8">
      <div className=" uppercase text-xl md:text-7xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-700">Decorate</div>
      <div className="uppercase text-lg md:text-5xl text-gray-500 font-medium font-serif text-orange-300">Your Dream Project</div>
      <div className="md:text-xl text-md font-serif text-white">
      Make your dream space a reality with our unique decorative piece! 
       As a <span className=" text-orange-500 font-extrabold font-serif  ">SPACE DECORER </span>, we understand the importance of finding
       the perfect statement piece. 
       <div className="md:text-xl text-md font-serif text-white mt-10">
       Our product will 
      elevate your space with its one-of-a-kind design. Let us help you create a space that 
      truly reflects your style." 
       </div>
      </div>
    </article>
    <article className="rounded-xl col-span-12 md:col-span-6 border-solid" style={{ height: '550px' }}>
      <Image src={HeroImage} alt='hero image' height={600} width={500} />
    </article>
  </section>;
};

export default HeroSection;
