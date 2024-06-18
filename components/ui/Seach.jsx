import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import Image from "next/image";
import { IoCloseCircleOutline } from "react-icons/io5";

const Seach = ({ setIsSearchModal }) => {
  return (
    <div
      className='fixed w-screen h-screen grid place-content-center z-50 top-0 left-0 after:content-[""] after:w-screen
   after:h-screen after:bg-gray-400 after:absolute after:top-0 after:left-0 after:opacity-60'
    >
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="w-full h-full grid place-content-center p-10">
          <div
            className="relative z-50 md:w-[600px] w-[370px]  bg-white border-2 rounded-md
          p-5 "
          >
            <Title addClass="text-[40px] text-center">Search</Title>
            <input
              className="border w-full p-3 rounded my-10"
              type="text"
              placeholder="Search.."
            />
            <div>
              <ul>
                <li
                  className="flex items-center justify-between p-2 rounded-md
                hover:bg-primary transition-all cursor-pointer"
                >
                  <Image
                    src="/images/f1.png"
                    width={48}
                    height={48}
                    alt="food"
                  />
                  <span className="font-bold">Good Pizza</span>
                  <span className="font-bold">10$</span>
                </li>
                <li
                  className="flex items-center justify-between p-2 rounded-md
                hover:bg-primary transition-all cursor-pointer"
                >
                  <Image
                    src="/images/f1.png"
                    width={48}
                    height={48}
                    alt="food"
                  />
                  <span className="font-bold">Good Pizza</span>
                  <span className="font-bold">10$</span>
                </li>
                <li
                  className="flex items-center justify-between p-2 rounded-md
                hover:bg-primary transition-all cursor-pointer"
                >
                  <Image
                    src="/images/f1.png"
                    width={48}
                    height={48}
                    alt="food"
                  />
                  <span className="font-bold">Good Pizza</span>
                  <span className="font-bold">10$</span>
                </li>
              </ul>
              <button onClick={()=> setIsSearchModal(false)} className="absolute top-3 right-3">
                <IoCloseCircleOutline className=" text-3xl hover:text-primary transition-all" />
              </button>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Seach;
