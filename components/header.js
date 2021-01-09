import { useState } from "react";
import Nav from "./nav";
import Link from 'next/link';

const Header = () => {

  let [canShowMobileMenu, setMenuState] = useState(false);

  return (
    <header>
      {/* <div className="text-center">
        <img src="./assets/images/logo-bg.png" className="sm:hidden h-16 mt-3 inline-block" />
      </div> */}

      <div className="container px-6 xl:px-0 mx-auto flex justify-between py-6 items-center">
        <div className="flex items-center text-xs md:text-xl font-bold"> 
          <Link href="/">
            <div className="flex items-center justify-between cursor-pointer">
              <img src="./assets/images/logo-bg.png" className="h-10 md:h-20 mr-3 md:mr-6" alt="company logo" />
              <span className="font-hero tracking-wider"> Rafia Mohammed Al Qarni <br />Trading Est. </span>
            </div>
          </Link>
        </div>
        
        <div className="hidden lg:block">
          <Nav />
        </div>
        
        <div className="lg:hidden">
          <img src="./assets/icons/menu.svg" alt="menu" className="h-5 ml-3 cursor-pointer md:h-6" onClick={() => setMenuState(!canShowMobileMenu)} />
        </div>
      </div>

      {
        canShowMobileMenu && 
        <div className="lg:hidden -my-3">
          <Nav />
        </div>
      }
    </header>
  )
};

export default Header;