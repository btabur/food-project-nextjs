import React from "react";
import Title from "../ui/Title";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import Logo from "../ui/Logo";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="bg-secondary text-white">
      <div className="container mx-auto pt-4">
        <div className="flex flex-wrap">
          <div className="min-w-[400px] flex flex-col gap-2 flex-1 ">
            <Title addClass={"text-[30px] text-center"}>Contact Us </Title>
            <p className="flex items-center gap-3 justify-center ">
              {" "}
              <FaLocationDot /> Location
            </p>
            <p className=" flex items-center gap-3 justify-center">
              {" "}
              <FaPhone /> Call +01 123456789
            </p>
            <p className="flex items-center gap-3 justify-center">
              <FaEnvelope /> demo@gmail.com
            </p>
          </div>
          <div className=" min-w-[400px] flex-1  flex flex-col gap-2">
            <Logo addClass={'text-center'} />
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur, nam cupiditate facilis aspernatur adipisci debitis
              perspiciatis itaque cum eligendi, quas enim molestias,
              reprehenderit sit repudiandae provident eius voluptates autem eos?
            </p>
            <div className="flex justify-center items-center gap-2">
              <div className="p-2 border rounded-full bg-white">
                <BsInstagram className="text-black text-xl" />
              </div>
              <div className="p-2 border rounded-full bg-white">
                <FaFacebook className="text-black text-xl" />
              </div>
              <div className="p-2 border rounded-full bg-white">
                <FaXTwitter className="text-black text-xl" />
              </div>
            </div>
          </div>
          <div className=" min-w-[400px] flex-1  text-center  flex  flex-col gap-3">
            <Title addClass={'text-4xl'}>Opening House</Title>
            <p>Every Day</p>
            <p>10:00 -17:00</p>
          </div>
        </div>

        <p className="text-center py-4 ">
          2024 All Rights Reserved by B. Tabur
        </p>
      </div>
    </section>
  );
};

export default Footer;
