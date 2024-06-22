import Image from "next/image";
import React from "react";
import Title from "./Title";

const About = () => {
  return (
    <section className="w-full min-h-[110vh] bg-secondary flex flex-wrap
     items-center justify-around gap-10 p-16">
      <div className=" relative h-[calc(100vh_-50px)] flex-1 min-w-[400px]  ">
        <Image src="/images/about-img.png" alt="" layout="fill" objectFit="contain" />
      </div>
      <div className="flex-1 text-white min-w-[400px] ">
        <Title addClass={"text-5xl"}>We Are Feane</Title>
        <p className="my-5  text-xl">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isnt anything embarrassing hidden in the middle of text. All
        </p>
        <button className="btn-primary text-xl">Read More 21.video</button>
      </div>
    </section>
  );
};

export default About;
