"use client";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      {/* menu-icon */}
      <div>
        {isOpen ? (
          <ImCross onClick={toggleOpen} />
        ) : (
          <GiHamburgerMenu onClick={toggleOpen} className="text-2xl" />
        )}
      </div>

      {/* menu-options */}
      <div
        className={` ${
          isOpen ? "" : "hidden"
        } absolute top-[64px] left-0 z-50 w-full h-[calc(50vh-64px)] bg-slate-100/90 flex flex-col gap-6 text-lg font-semibold items-center justify-center`}
      >
        <Link href={"/profile"}>Profile</Link>
        <Link href={"/profile"}>Friends</Link>
        <Link href={"/profile"}>Chat</Link>
        <Link href={"/profile"}>About</Link>
        <Link href={"/profile"}>Stories</Link>
      </div>
    </div>
  );
};

export default MobileMenu;
