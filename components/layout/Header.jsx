import React, { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Seach from "../ui/Seach";


const Header = () => {
  const [isSearchModal,setIsSearchModal] = useState(false)
  return (
    <header className="h-[5.5rem] bg-secondary ">
      <div className="container mx-auto flex justify-between items-center text-white h-full">
        <Logo />
        <nav>
          <ul className="flex gap-10">
            <li className=" px-[5px] py-[10px] hover:text-primary cursor-pointer">
              HOME
            </li>
            <li className=" px-[5px] py-[10px] hover:text-primary cursor-pointer">
              MENU
            </li>
            <li className=" px-[5px] py-[10px] hover:text-primary cursor-pointer">
              ABOUT
            </li>
            <li className=" px-[5px] py-[10px] hover:text-primary cursor-pointer">
              BOOK TABLE
            </li>
          </ul>
        </nav>
        <div className="flex gap-4 items-center justify-center">
          <a href="#">
            <FaUserAlt className="hover:text-primary transition-all" />
          </a>
          <a href="">
            <FaShoppingCart  className="hover:text-primary transition-all"/>
          </a>
          <button onClick={()=>setIsSearchModal(true)}>
          <FaSearch className="hover:text-primary transition-all" />
          </button>
         <a href="">
         <button className="btn-primary">Order Online</button>
         </a>
        </div>
      </div>
      {isSearchModal && 
       <Seach setIsSearchModal={setIsSearchModal}/>
       }
    </header>
  );
};

export default Header;
