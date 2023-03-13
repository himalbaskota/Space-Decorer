import MainLayout from '@/layouts/MainLayout';

import Image from 'next/image';
import HeroImage from '../../assets/images/homebackground.png'
import product1 from '../../assets/images/product1.png'
import product2 from '../../assets/images/product2.png'
import product3 from '../../assets/images/product3.png'
import product4 from '../../assets/images/product4.png'
import product5 from '../../assets/images/product5.png'
import product6 from '../../assets/images/product6.png'
import product7 from '../../assets/images/product7.png'
import product8 from '../../assets/images/product8.png'
import product9 from '../../assets/images/product9.png'
import product10 from '../../assets/images/product10.png'
import product11 from '../../assets/images/product11.png'
import product12 from '../../assets/images/product12.png'
import product13 from '../../assets/images/product13.png'
import product14 from '../../assets/images/product14.png'
import product15 from '../../assets/images/product15.png'
import product16 from '../../assets/images/product16.png'
import product17 from '../../assets/images/product17.png'
import product18 from '../../assets/images/product18.png'
import product19 from '../../assets/images/product19.png'
import product20 from '../../assets/images/product20.png'
const ProductPage = () => {
  return <>
  
  <section className="dynamic-x-padding  bg-gray-200 mt-10">
    <article>
        <div className="uppercase text-xl md:text-5xl font-serif text-center font-extrabold text-transparent 
        bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 mb-10 pt-10 ">Products</div>
    </article>

    <article className="grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="">
            <div>
            <Image src={product1} alt=''/>
            </div>
        </div>
         <div className="">
            <div>
            <Image src={product2} alt=''/>
            </div>
        </div>
        <div className="">
            <div>
            <Image src={product3} alt=''/>
            </div>
        </div>

    </article>
    <article className="grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="">
            <div>
            <Image src={product4} alt=''/>
            </div>
        </div>
         <div className="">
            <div>
            <Image src={product5} alt=''/>
            </div>
        </div>
        <div className="">
            <div>
            <Image src={product6} alt=''/>
            </div>
        </div>

    </article>
    <article className="grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="">
            <div>
            <Image src={product7} alt=''/>
            </div>
        </div>
         <div className="">
            <div>
            <Image src={product8} alt=''/>
            </div>
        </div>
        <div className="">
            <div>
            <Image src={product9} alt=''/>
            </div>
        </div>

    </article>
    <article className="grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="">
            <div>
            <Image src={product16} alt=''/>
            </div>
        </div>
         <div className="">
            <div>
            <Image src={product11} alt=''/>
            </div>
        </div>
        <div className="">
            <div>
            <Image src={product12} alt=''/>
            </div>
        </div>

    </article>
    <article className="grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="">
            <div>
            <Image src={product13} alt=''/>
            </div>
        </div>
         <div className="">
            <div>
            <Image src={product14} alt=''/>
            </div>
        </div>
        <div className="">
            <div>
            <Image src={product15} alt=''/>
            </div>
        </div>

    </article>
    <article className="grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="">
            <div className='mt-5 '>
            <Image src={product10} alt=''/>
            </div>
        </div>
         <div className="">
            <div>
            <Image src={product17} alt=''/>
            </div>
        </div>
        <div className="">
            <div>
            <Image src={product18} alt=''/>
            </div>
        </div>

    </article>
    <article className="grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="">
            <div>
            <Image src={product19} alt=''/>
            </div>
        </div>
         <div className="">
            <div>
            <Image src={product20} alt=''/>
            </div>
        </div>
        <div className="">
            <div>
            <Image src={HeroImage} alt=''/>
            </div>
        </div>

    </article>
    
  </section>;

  </>;
};
ProductPage.Layout = MainLayout;
export default ProductPage;
