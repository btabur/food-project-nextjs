import Image from "next/image";
import React from "react";
import Title from "../../components/ui/Title";

const Cart = () => {
  return (
    <section className="min-h-[calc(100vh_-_433px)]">
      <main className="flex justify-between md:flex-row flex-col ">
        <article className="flex justify-center items-center  w-full">
          <table className="m-5 w-full border text-center text-gray-300">
            <thead className=" text-xl  w-full">
              <tr className="bg-slate-600 ">
                <th className="py-3 px-6">Product</th>
                <th className="py-3 px-6">Extras</th>
                <th className="py-3 px-6">Price</th>
                <th className="py-3 px-6">Quantitiy</th>
              </tr>
            </thead>
            <tbody className="bg-secondary ">
              <tr className="py-4 hover:bg-primary transition cursor-pointer">
                <td className="flex items-center justify-center gap-2 py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  <Image src="/images/f1.png" width={40} height={40} alt="" />
                  <span>Good Pizza</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">mayonez,acı sos,ketçap</td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">$30</td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">1</td>
              </tr>
            </tbody>
          </table>
        </article>
        <article className="bg-secondary  min-h-[calc(100vh_-_433px)] w-full md:w-96 text-white ">
          <Title addClass={"text-5xl text-center mt-10  "}>Total</Title>
          <div className="flex flex-col gap-2 mx-10 mt-10">
            <p>Sub Total: 120$</p>
            <p>DisCount: 5$</p>
            <p>Total: 125$</p>
            <button className="btn-primary text-lg mt-4">Check Out</button>
          </div>
        </article>
      </main>
    </section>
  );
};

export default Cart;
