import Image from "next/image";
import React from "react";
import Logo from "../../../assets/images/scanner.jpg";
const About = () => {
  return <section className="dynamic-x-padding grid grid-cols-12 mt-10 gap-8 mb-10 ">
   <article className="md:col-span-8 col-span-12 space-y-6">
   <div className="  uppercase text-xl md:text-5xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-700">About Us</div>
   <div className="text-xl font-serif text-gray-700">
   Welcome to Spacedecorer, we are passionate about creating unique and exquisite
    wooden tables and chairs, fine art pieces, and other decorative products that enrich your daily life. <div className="pt-5 font-serif">
     Our sustainably sourced materials and handcrafted approach ensure that every piece is of the highest
      quality and attention to detail. We specialize in live edge tables and chairs, which showcase the 
      natural beauty of the wood.
      </div>
     
      </div>
   </article>
   <article className="md:col-span-4 col-span-12">
    <Image src={Logo} alt=''/>
   </article>
  </section>;
};

export default About;
