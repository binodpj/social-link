import React from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import { MdHome } from "react-icons/md";
import { FaUserFriends, FaUserCircle } from "react-icons/fa";
import { LuCircleFadingPlus } from "react-icons/lu";
import { IoMdNotifications } from "react-icons/io";
import { BsChatDotsFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="h-16 w-full flex items-center justify-between">
      {/* left */}
      <div>
        <Link href={"/"} className="text-xl font-bold">
          SOCIAL LINK
        </Link>
      </div>

      {/* middle */}
      <div className="hidden md:flex gap-8">
        <Link href={"/"} className="flex gap-1 items-center justify-center">
          <MdHome className="text-lg" />
          Homepage
        </Link>

        <Link href={"/"} className="flex gap-1 items-center justify-center">
          <FaUserFriends className="text-lg" />
          Friends
        </Link>

        <Link href={"/"} className="flex gap-1 items-center justify-center">
          <LuCircleFadingPlus className="text-lg" />
          Stories
        </Link>

        <div className="hidden xl:flex items-center justify-center bg-slate-100 px-2 rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 outline-none"
          />
          <IoSearch className="text-gray-600 text-lg" />
        </div>
      </div>

      {/* right */}
      <div>
        <div className="md:hidden">
          <MobileMenu />
        </div>

        <div className="hidden md:flex">
          <ClerkLoading>
            <div
              className="inline-block h-5 w-5 animate-spin rounded-full border-3 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </ClerkLoading>

          <ClerkLoaded>
            <SignedIn>
              <div className="flex gap-4 items-center justify-center">
                <div>
                  <IoMdNotifications className="text-3xl cursor-pointer pb-1 text-gray-700" />
                </div>
                <div>
                  <BsChatDotsFill className="text-2xl cursor-pointer pb-1 text-gray-700" />
                </div>

                <div className="cursor-pointer">
                  <UserButton />
                </div>
              </div>
            </SignedIn>

            <SignedOut>
              <Link
                href={"/sign-in"}
                className="flex gap-1 items-center justify-center text-sm"
              >
                <FaUserCircle className="text-lg" /> Login/Register
              </Link>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
