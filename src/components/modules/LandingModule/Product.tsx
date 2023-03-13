import Image from "next/image";
import React from "react";
import Painting from '../../../assets/images/product23.png'
import Furniture from '../../../assets/images/product8.png'
import Logocarving from '../../../assets/images/product2.png'
const Product = () => {
  return <section className="dynamic-x-padding pb-10 bg-gradient-to-r from-red-400 to-orange-500">
    <article>
        <div className="text-center text-5xl text-bold font-serif font-black text-white  px-5 py-5">PRODUCTS</div>
    </article>

    <article className="grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4 ">
        <div className="">
            <div>
            <Image src={Painting} alt=''/>
            <div className="text-center h-2 font-serif text-xl ">Paintings</div>
            </div>
        </div>
         <div className="">
            <div>
            <Image src={Furniture} alt='' />
            <div className="text-center font-serif text-xl">Furniture Customization</div>
            </div>
        </div>
        <div className="">
            <div>
            <Image src={Logocarving} alt=''/>
            <div className="text-center font-serif text-xl 
            ">Logo Carving</div>
            </div>
        </div>
        {/* <div className="col-span-3 check">
            <div>
            <Image src={HeroImage} alt=''/>
            <div className="text-center">abc</div>
            </div>
        </div> */}
    </article>
    
  </section>;
};

export default Product;
