import Image from "next/image";
import Title from "./ui/Title";
import { MdShoppingCart } from "react-icons/md";

const CampaingItem = () => {
  return (
    <article className="bg-secondary flex-1 rounded-md py-5 px-[15px] flex items-center gap-4">
    <div className=" relative md:w-40 md:h-40 w-36 h-36 border-[5px] border-primary rounded-full overflow-hidden">
    <Image
        className="  hover:scale-105 transition-all "
        src="/images/o1.jpg"
        alt=""
       layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="text-white my-4">
      <Title addClass={"text-2xl"}>   Tasty Thursdays</Title>
      <p className="text-[40px] font-dancing">20% <span className="text-xl">off</span></p>
      <button className="btn-primary flex items-center gap-2 mt-2">Order Now 
      <MdShoppingCart size={20} />
      </button>
    </div>
    </article>
  );
};

const Campaing = () => {
  return (
    <section className="flex justify-evenly container mx-auto py-20 gap-20 flex-wrap ">
      <CampaingItem />
      <CampaingItem />
    </section>
  );
};

export default Campaing;
