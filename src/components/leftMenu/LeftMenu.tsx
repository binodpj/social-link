import React from "react";

import Link from "next/link";
import { BsFillPostcardHeartFill } from "react-icons/bs";
import { RxActivityLog } from "react-icons/rx";
import { MdEvent } from "react-icons/md";
import { AiFillPicture } from "react-icons/ai";
import { FaVideo } from "react-icons/fa";
import { FaNewspaper, FaBook, FaCartShopping } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import ProfileCard from "./ProfileCard";
import Ads from "../Ads";


const LeftMenu = ({ userId }: { userId?: String }) => {
  return (
    <div>
      {!userId && <ProfileCard />}

      <div className=" p-4 bg-white shadow-lg rounded-lg flex flex-col gap-2">
        <Link
          href={"/"}
          className="flex gap-2 items-center text-sm p-2 rounded-lg hover:bg-gray-100"
        >
          <BsFillPostcardHeartFill className="text-lg" />
          <p>My Posts</p>
        </Link>

        <hr className="w-[90%] self-center text-gray-200" />

        <Link
          href={"/"}
          className="flex gap-2 items-center text-sm p-2 rounded-lg hover:bg-gray-100"
        >
          <RxActivityLog />
          <p>Activity</p>
        </Link>
        <hr className="w-[90%] self-center text-gray-200" />

        <Link
          href={"/"}
          className="flex gap-2 items-center text-sm p-2 rounded-lg hover:bg-gray-100"
        >
          <MdEvent className="text-lg" />
          <p>Events</p>
        </Link>
        <hr className="w-[90%] self-center text-gray-200" />

        <Link
          href={"/"}
          className="flex gap-2 items-center text-sm p-2 rounded-lg hover:bg-gray-100"
        >
          <AiFillPicture className="text-lg" />
          <p>Photos</p>
        </Link>
        <hr className="w-[90%] self-center text-gray-200" />

        <Link
          href={"/"}
          className="flex gap-2 items-center text-sm p-2 rounded-lg hover:bg-gray-100"
        >
          <FaVideo className="text-lg" />
          <p>Videos</p>
        </Link>
        <hr className="w-[90%] self-center text-gray-200" />

        <Link
          href={"/"}
          className="flex gap-2 items-center text-sm p-2 rounded-lg hover:bg-gray-100"
        >
          <FaNewspaper className="text-lg" />
          <p>News</p>
        </Link>
        <hr className="w-[90%] self-center text-gray-200" />

        <Link
          href={"/"}
          className="flex gap-2 items-center text-sm p-2 rounded-lg hover:bg-gray-100"
        >
          <FaBook className="text-lg" />
          <p>Courses</p>
        </Link>
        <hr className="w-[90%] self-center text-gray-200" />

        <Link
          href={"/"}
          className="flex gap-2 items-center text-sm p-2 rounded-lg hover:bg-gray-100"
        >
          <FaCartShopping className="text-lg" />
          <p>Marketplace</p>
        </Link>
        <hr className="w-[90%] self-center text-gray-200" />

        <Link
          href={"/"}
          className="flex gap-2 items-center text-sm p-2 rounded-lg hover:bg-gray-100"
        >
          <IoSettingsSharp className="text-lg" />
          <p>Setting</p>
        </Link>
      </div>

      <Ads size="sm" />
    </div>
  );
};

export default LeftMenu;
