import Image from "next/image";
import React, { useState } from "react";
import { FaHome, FaKey, FaBorderStyle } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import Title from "../../components/ui/Title";
import Input from "../../components/form/Input";
import Account from "../../components/profile/Account";
import Password from "../../components/profile/Password";
import Orders from "../../components/profile/Orders";



const Profile = () => {
    const [tabs, setTabs] = useState(0)
 
  return (
    <section className=" mx-20 flex  flex-col md:flex-row items-center justify-start pb-10">
      <article className="border-[3px] w-2/3 md:w-60  mx-10 ">
        <div className="relative flex flex-col items-center justify-center h-40 ">
          <Image
            className="rounded-full"
            src="/images/c2.jpg"
            width={90}
            height={90}
            alt="profil"
          />
          <b>Balı Tabur 44</b>
        </div>
        <ol>
            <li onClick={()=> setTabs(0)} className={`flex items-center hover:bg-primary hover:text-white border-t py-3 px-3 gap-4 font-bold cursor-pointer text-lg transition-all ${tabs==0 && 'bg-primary text-white'}`}>  <FaHome /> <span>Account</span></li>
            <li onClick={()=> setTabs(1)} className={`flex items-center hover:bg-primary hover:text-white border-t py-3 px-3 gap-4 font-bold cursor-pointer text-lg transition-all ${tabs==1 && 'bg-primary text-white'}`}> <FaKey /> <span>Password</span></li>
            <li onClick={()=> setTabs(2)} className={`flex items-center hover:bg-primary hover:text-white border-t py-3 px-3 gap-4 font-bold cursor-pointer text-lg transition-all ${tabs==2 && 'bg-primary text-white'}`}> <FaBorderStyle /> <span>Orders</span></li>
            <li onClick={()=> setTabs(3)} className={`flex items-center hover:bg-primary hover:text-white border-t py-3 px-3 gap-4 font-bold cursor-pointer text-lg transition-all ${tabs==3 && 'bg-primary text-white'}`}>  <ImExit /> <span>Exit</span></li>
        </ol>
      </article>
      {tabs ==0 && <Account/> }
      {tabs ==1 && <Password/> }
      {tabs ==2 && <Orders/> }
    </section>
  );
};

export default Profile;
