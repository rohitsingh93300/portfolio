import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
   <Link href='/'>
    <Image src='/logo.png' width={84} height={54} priority alt="logo"/>
   </Link>
  )
}

export default Logo
