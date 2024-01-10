import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import { useState, useRef, useEffect, } from 'react';
const Navbar = () => {

  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${isSticky ? 'bg-[#32165b] text-white' : 'bg-transparent text-black font-semibold '
      } w-full fixed top-0 transition-all duration-500 p-5 font-semibold px-12  z-[1000]`}>
      <div className="container mx-auto flex justify-between items-center w-[95%]">
        <div className='text-white'>
          Kitchen
          {/* <img className='w-[100px] h-[40px] object-cover' src='https://img.freepik.com/free-vector/logo-with-three-flower-petals_1017-4311.jpg?size=626&ext=jpg&ga=GA1.1.1705786090.1704260853&semt=sph' /> */}
        </div>

        <div className="flex gap-4  ">
          <div
            className="hidden md:flex  space-x-6 max-sm:hidden p-1"
          >
            <Link href="/" className="hover:text-gray-300 text-white ">
              Home
            </Link>

            <Link href="/Staticpages/About" className="hover:text-gray-300 text-white">
              About
            </Link>
            <Link href="/Staticpages/contactus" className="hover:text-gray-300 text-white">
              Help
            </Link>
          </div>
          <div class="input-wrapper flex gap-2 text-white font-semibold ">

            <Link href="/Staticpages/Login">   <button className=' bg-orange-400  px-8 p-2 ml-5  hover:bg-white hover:text-black  '>Login</button></Link>
          </div>
        </div>
      </div>

    </nav>
  );
};
export default Navbar;
