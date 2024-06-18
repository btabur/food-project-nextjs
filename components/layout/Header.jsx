import React, { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Seach from "../ui/Seach";
import { IoMenu } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";



const Header = () => {
  const [isSearchModal,setIsSearchModal] = useState(false);
  const [isShowMenu,setIsShowMenu]=useState(false);
  return (
    <header className="h-[5.5rem] bg-secondary ">
      <div className="container mx-auto flex justify-between items-center text-white h-full">
        <Logo />
        <nav className={`sm:static absolute top-0 right-0 
        grid place-content-center h-full w-full sm:text-white text-black sm:w-auto sm:h-auto 
          sm:bg-transparent bg-white 
          ${!isShowMenu && "hidden"} `}>
          <ul className="flex gap-10 sm:flex-row flex-col">
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
          {isShowMenu && <button onClick={()=> setIsShowMenu(false)} className="absolute top-3 right-3 z-[55]">
                <IoCloseCircleOutline className=" text-3xl hover:text-primary transition-all" />
              </button>}
        
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
         <a href="" className="md:inline-block hidden">
         <button className="btn-primary">Order Online</button>
         </a>
         <button onClick={()=>setIsShowMenu(true)} className="sm:hidden inline-block">
         <IoMenu className="hover:text-primary transition-all"  />
         </button>
       
        </div>
      </div>
      {isSearchModal && 
       <Seach setIsSearchModal={setIsSearchModal}/>
       }
    </header>
  );
};

export default Header;
