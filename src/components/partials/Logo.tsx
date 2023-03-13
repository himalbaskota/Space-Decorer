import whiteLogo from "@/assets/images/whiteLogo.svg";
import { useRouter } from "next/router";
import Image from "next/image";


const Logo = () => {
  return(
    <Image src={whiteLogo} alt=''/>
  )
}

export default Logo;
