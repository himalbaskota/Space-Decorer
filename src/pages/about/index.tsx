import MainLayout from "@/layouts/MainLayout";
import Image from "next/image";
import React from "react";
import Logo from "../../assets/images/logo.png";
const About = () => {
  return <section className="dynamic-x-padding grid grid-cols-12 mt-10 gap-8 mb-10">
   <article className="col-span-8 space-y-6">
   <div className="  uppercase text-xl md:text-5xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-700">About Us</div>
   <div className="text-xl  font-serif text-gray-700">
   Welcome to Spacedecorer, we are passionate about creating unique and exquisite
    wooden tables and chairs, fine art pieces, and other decorative products that enrich your daily life. <div className="pt-5 font-serif text-gray-700 mb-5">
     Our sustainably sourced materials and handcrafted approach ensure that every piece is of the highest
      quality and attention to detail. We specialize in live edge tables and chairs, which showcase the 
      natural beauty of the wood.
      </div>
      <div className="text-xl font-serif text-gray-700 mt-10">
      In addition to our furniture, we offer a range of art pieces created using various mediums, including oil and acrylic paintings, watercolors, and mixed media. We also provide custom design services, allowing you to create a piece that is uniquely yours.
<div className="text-xl font-serif text-gray-700 mt-10">
At Spacedecorer, we are committed to sustainability and social responsibility. We use eco-friendly materials and practices to minimize our environmental impact. 
   Thank you for considering Spacedecorer for your furniture and decor needs. Our dedication to quality and sustainability sets us apart, and we look forward to helping you create a beautiful and functional space that reflects your personality and style.
   </div>
      </div>
      </div>
   </article>
   <article className="col-span-4">
    <Image src={Logo} alt=''/>
   </article>
  </section>;
};

About.Layout = MainLayout
export default About;
