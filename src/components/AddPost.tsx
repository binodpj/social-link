import Image from "next/image";
import React from "react";
import { MdEmojiEmotions, MdEvent } from "react-icons/md";
import { AiFillPicture } from "react-icons/ai";
import { FaVideo, FaPoll } from "react-icons/fa";

const AddPost = () => {
  return (
    <div className="mt-4 p-4 bg-white shadow-lg rounded-lg">
      <div className="flex gap-2">
        <Image
          src="https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=1200"
          width={40}
          height={40}
          alt="Picture"
          className="rounded-full ring-2 object-cover h-10 w-10"
        />

        <div className="flex flex-col gap-2 flex-1">
          {/* icon and text */}
          <div className="flex gap-2 justify-around">
            <textarea
              name=""
              id=""
              placeholder="Whats on your mind?"
              className="bg-slate-100 rounded-lg p-1 text-sm flex-1 outline-none"
            />

            <MdEmojiEmotions className="text-xl text-yellow-600 cursor-pointer" />
          </div>

          {/* add media */}
          <div className="flex gap-2 justify-around items-center flex-wrap text-gray-800">
            <div className="flex gap-1 items-center justify-center cursor-pointer">
              <AiFillPicture />
              <span className="text-sm">Photo</span>
            </div>

            <div className="flex gap-1 items-center justify-center cursor-pointer">
              <FaVideo />
              <span className="text-sm">Video</span>
            </div>

            <div className="flex gap-1 items-center justify-center cursor-pointer">
              <FaPoll />
              <span className="text-sm">Poll</span>
            </div>

            <div className="flex gap-1 items-center justify-center cursor-pointer">
              <MdEvent />
              <span className="text-sm">Event</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
