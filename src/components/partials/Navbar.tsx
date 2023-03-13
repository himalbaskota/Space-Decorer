import Logo from '../../assets/images/logo.png'
import Image from 'next/image';
import { useRouter } from 'next/router'
const Navbar = () => {
  const router = useRouter()
  return <>
  <section className="dynamic-x-padding flex items-center justify-between py-2 bg-gradient-to-r from-red-400 to-orange-400">
    <article style={{height:'50px', width:'50px'}}>
      <div className='hover:cursor-pointer' onClick={()=> router.push('/')} ><Image  src={Logo} alt=''/></div>
    </article>
    <article className="flex gap-x-5 text-white font-bold text-lg hover:cursor-pointer">
      <div onClick={()=> router.push('/')}>Home</div>
      <div onClick={()=> router.push('/product')}>Product</div>
      <div onClick={()=> router.push('/about')}>About Us</div>
    </article>
    </section>
    </>;
};

export default Navbar;
