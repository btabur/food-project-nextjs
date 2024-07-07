import Link from "next/link";
import React from "react";

const Logo = ({ addClass }) => {
  return (
    <article className={`text-[2rem] font-bold font-dancing cursor-pointer ${addClass}`}>
      <Link href={"/"}>Feane</Link>
    </article>
  );
};

export default Logo;
