import Image from "next/image";
import React from "react";

const CustomerItem = ({imgSrc}) => {
  return (
    <article>
      <div className="p-6 bg-secondary text-white rounded-md mx-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          repellendus architecto cum fugit optio eum recusandae omnis sunt
          consequatur tempora sapiente vero, officia possimus mollitia, fuga ex?
          Dicta, aspernatur aperiam!
        </p>
        <h3 className="text-xl mt-3 font-semibold"> Moana Michell</h3>
        <span>magna aliqua</span>
      </div>
      <div className="relative w-28 h-28 border-4 border-primary rounded-full mt-8
      before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:bg-primary before:w-6 before:h-6
      before:-translate-y-3 before:rotate-45">
        <Image
        className="rounded-full"
          alt="customer"
          src={imgSrc}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </article>
  );
};

export default CustomerItem;
