import Title from "@/components/ui/Title";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <main className="flex items-center justify-center gap-32 h-screen flex-wrap">
        {/* left */}
      <div className="relative w-[25%] h-[40%] min-w-[300px]">
        <Image src="/images/f1.png" alt="" layout="fill" />
      </div>
      {/* right */}
      <div className="md:w-[40%] w-[80%] flex flex-col gap-5 ">
        <Title addClass={"text-6xl"}>Good Pizza</Title>
        <span className="underline underline-offset-3  text-primary text-3xl  font-bold">
          $10
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur hic
          fugit praesentium velit accusamus similique possimus, vel neque ut ab
          culpa alias quos commodi quae ullam soluta, officia, incidunt impedit!
        </p>
        <div>
          <h4 className="text-2xl font-semibold">Choose the size</h4>
          <div className="flex items-center justify-start gap-16 mt-10">
            <div className="relative w-12 h-12">
              <Image src="/images/icon-pizza.svg" alt="" layout="fill" />
              <p className="absolute bg-primary py-1 px-2 rounded -top-3 -right-6 text-sm text-white">
                Small
              </p>
            </div>
            <div className="relative w-14 h-14">
              <Image src="/images/icon-pizza.svg" alt="" layout="fill" />
              <p className="absolute bg-primary py-1 px-2 rounded -top-3 -right-6 text-sm text-white">
                Medium
              </p>
            </div>
            <div className="relative w-16 h-16">
              <Image src="/images/icon-pizza.svg" alt="" layout="fill" objectFit="contain" />
              <p className="absolute bg-primary py-1 px-2 rounded -top-3 -right-6 text-sm text-white">
                Large
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h4 className="text-2xl font-semibold">
            Choose addional ingredients
          </h4>
          <div className="flex items-center mt-3 gap-4">
            <label className="flex items-center gap-1">
              <input
                className="accent-primary w-5 h-5"
                type="checkbox"
              />
              <span className="text-sm font-bold">keptaç</span>
            </label>
            <label className="flex items-center gap-1">
              <input
                className="accent-primary w-5 h-5"
               
                type="checkbox"
              />
              <span className="text-sm font-bold">mayonez</span>
            </label>
            <label className="flex items-center gap-1">
              <input
                className="accent-primary w-5 h-5"
               
                type="checkbox"
              />
              <span className="text-sm font-bold">Acı sos</span>
            </label>
          </div>
        </div>
        <button className="btn-primary w-40">Add to Card</button>
      </div>
    </main>
  );
};

export default index;
