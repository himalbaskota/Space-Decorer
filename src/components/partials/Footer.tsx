import { BrandInstagram } from 'tabler-icons-react';
import router, { useRouter } from 'next/router'
const Footer = () => {
  const router = useRouter()
  return <>

    <footer className="p-4 bg-white shadow  md:p-6 dark:bg-gray-200 md: md:  bg-gradient-to-r from-red-400 to-orange-400">

      <div className=' text-lg text-white font-mono  text-center   flex items-center justify-center'>+977 9860960828</div>
      <div className=' text-lg text-white font-mono  text-center  flex items-center justify-center hover:cursor-pointer'
        onClick={() => router.push('https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZZzkJLPGVtLsNvWVtqSJkqKPljspzlGHQpZWDhhrmgDpZDRqpbDGlQdNNhQKpQBWKTwvq')}>decorerspace@gmail.com</div>
      <div className=" text-lg text-white font-mono  text-center  flex items-center justify-center hover:cursor-pointer "
        onClick={() => router.push('https://www.instagram.com/spacedecorer/')}>Insta: <BrandInstagram /> </div>

      <div className="text-sm text-white font-serif sm:text-center flex justify-center mt-5">
        © 2023. Space Decorer. All Rights Reserved.
      </div>



    </footer>

  </>;
};

export default Footer;
