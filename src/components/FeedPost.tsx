import React from "react";
import Comment from "./Comment";
import Image from "next/image";
import { IoIosMore } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { FaRegCommentDots, FaShare } from "react-icons/fa";

const FeedPost = () => {
  return (
    <div className="mt-4 p-4 bg-white shadow-lg rounded-lg flex flex-col gap-2">
      {/* user details */}
      <div className="flex justify-between items-center cursor-pointer">
        <div className="flex justify-around items-center gap-2">
          <Image
            src="https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=1200"
            width={32}
            height={32}
            alt="Picture"
            className="rounded-full ring-2 object-cover h-8 w-8"
          />

          <span>Binod Joshi</span>
        </div>

        <IoIosMore className="text-gray-500" />
      </div>

      {/* post photo and decs */}
      <div className="flex flex-col gap-2">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=1200"
            fill
            alt="post image"
            className="rounded-lg object-cover"
          />
        </div>

        <span className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          rerum nam corrupti modi natus sint magni temporibus vero reprehenderit
          qui laudantium, impedit ipsa cumque beatae! Consequatur pariatur vel
          aliquid maxime?
        </span>
      </div>

      {/* user interaction */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-4">
          <div className="flex gap-2 items-center justify-center bg-slate-100 px-4 py-1 rounded-2xl">
            <AiFillLike className="" />

            <span className="text-gray-400">|</span>

            <div className="flex">
              <span>123 </span>
              <span className="ml-1 hidden sm:block">Likes</span>
            </div>
          </div>

          <div className="flex gap-2 items-center justify-center bg-slate-100 px-4 py-1 rounded-2xl">
            <FaRegCommentDots className="" />

            <span className="text-gray-400">|</span>

            <div className="flex">
              <span>23 </span>
              <span className="ml-1 hidden sm:block">Comments</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-center justify-center bg-slate-100 px-4 py-1 rounded-2xl">
          <FaShare className="" />

          <span className="text-gray-400">|</span>

          <div className="flex">
            <span>3 </span>
            <span className="ml-1 hidden sm:block">Shares</span>
          </div>
        </div>
      </div>

      <Comment />
    </div>
  );
};

export default FeedPost;
