import React from "react";
import Title from "./Title";
import Input from "../form/Input";

const Reservation = () => {
  return (
    <section className="py-10 mt-10 container mx-auto flex gap-10 flex-wrap">
      <div className="w-[40%]">
        <Title addClass={"text-4xl mb-3"}>Book a Table</Title>
        <div className="flex flex-col gap-3">
          <Input text={"Your Full Name"} type={"text"} />
          <Input text={"Your phone number"} type={"phone"} />
          <Input text={"Your e-mail"} type={"email"} />
          <Input text={"How many pearson?"} type={"number"} />
          <Input text={""} type={"datetime-local"} />
        </div>
        <button className="btn-primary mt-5">Book Now</button>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12041.752055209741!2d28.954775445998653!3d41.01567218215864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab98d3ac01031%3A0x8accf5042157cfed!2sS%C3%BCleymaniye%20Camii!5e0!3m2!1str!2str!4v1719072084176!5m2!1str!2str"
          width="600"
          height="450"
        
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Reservation;
