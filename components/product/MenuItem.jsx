import Image from "next/image";
import React from "react";
import { MdShoppingCart } from "react-icons/md";

const MenuItem = () => {
  return (
    <article className="bg-secondary rounded-3xl group">
      <div className="relative w-full bg-[#f1f2f3] h-[210px] grid 
      place-content-center rounded-bl-3xl rounded-br-3xl overflow-hidden rounded-tl-[20px] rounded-tr-[20px]">
        <div className="relative w-36 h-36 transition-transform duration-300 group-hover:scale-110">
          <Image src="/images/f1.png" alt="Pizza" width={160} height={160} />
        </div>
      </div>
      <div className="p-[25px] text-white">
        <h4 className="text-xl font-semibold">Delicious Pizza</h4>
        <p className="text-[15px]">
          Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
          magnam voluptatem repellendus sed eaque
        </p>
        <div className="flex justify-between items-center py-[25px] ">
          <span>$20</span>
          <button className="bg-primary w-10 h-10 rounded-full grid place-content-center">
            <MdShoppingCart size={25} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default MenuItem;
