import Image from "next/image";
import React from "react";
import { MdEmojiEmotions } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";

const Comment = () => {
  return (
    <div className="mt-4 ">
      {/* add comment */}
      <div className="flex gap-4">
        <Image
          src="https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=1200"
          width={32}
          height={32}
          alt="Picture"
          className="rounded-full ring-2 object-cover h-8 w-8"
        />

        <div className="bg-slate-100 flex items-center px-4 flex-1 justify-between rounded-lg">
          <input
            type="text"
            placeholder="Write a comment ..."
            className="py-1 rounded-lg outline-none"
          />
          <MdEmojiEmotions className="text-xl text-yellow-600 cursor-pointer" />
        </div>
      </div>

      {/* prev comments */}
      <div className="mt-4 flex  gap-2">
        <div>
          <Image
            src="https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=1200"
            width={32}
            height={32}
            alt="Picture"
            className="rounded-full ring-2 object-cover h-8 w-8"
          />
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex items-center justify-between">
            <p>Binod Joshi</p>
            <IoIosMore className="text-gray-600" />
          </div>

          <div className="text-sm">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
              corporis recusandae voluptatum ad ab praesentium eaque. Unde a
              exercitationem
            </p>
          </div>

          <div className="flex gap-2 items-center text-gray-600 text-sm bg-slate-50 px-2 w-fit mt-2">
            <AiFillLike className="cursor-pointer" />

            <span>|</span>
            <p className="flex">
              32 <span className="hidden pl-1 sm:block">Likes</span>
            </p>

            <p className="pl-6 cursor-pointer">Reply</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
