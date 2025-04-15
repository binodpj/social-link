"use client";

import Image from "next/image";
import React, { useState } from "react";
import { MdEmojiEmotions, MdEvent } from "react-icons/md";
import { AiFillPicture } from "react-icons/ai";
import { FaVideo, FaPoll } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { addPost } from "@/actions/postActions";
import { CldUploadWidget } from "next-cloudinary";

const AddPost = () => {
  const { data: session, status } = useSession();
  const user = session?.user;

  const [desc, setDesc] = useState("");
  const [img, setImg] = useState<any>();

  return (
    <div className="mt-4 p-4 bg-white shadow-lg rounded-lg">
      <div className="flex gap-2">
        <Image
          src={user?.image || "/no-avatar.png"}
          width={40}
          height={40}
          alt="Picture"
          className="rounded-full ring-2 object-cover h-10 w-10"
        />

        <div className="flex flex-col gap-2 flex-1">
          <form
            action={(formdata) => addPost(formdata, img?.secure_url || "")}
            className="flex justify-between"
          >
            {/* icon and text */}
            <div className="flex gap-2 justify-around">
              <textarea
                name="desc"
                placeholder="Whats on your mind?"
                onChange={(e) => setDesc(e.target.value)}
                className="bg-slate-100 rounded-lg p-1 text-sm outline-none w-96"
              />

              <MdEmojiEmotions className="text-xl text-yellow-600 cursor-pointer" />
            </div>

            <button
              type="submit"
              className="text-xs px-4 py-1 w-[10%] border rounded-lg bg-gray-700 text-white hover:bg-gray-100 hover:text-black cursor-pointer"
            >
              Post
            </button>
          </form>

          {/* add media */}
          <div className="flex justify-around items-center flex-wrap text-gray-800">
            <CldUploadWidget
              uploadPreset="social-link"
              onSuccess={(result, { widget }) => {
                setImg(result.info);
                widget.close();
              }}
            >
              {({ open }) => {
                return (
                  <div
                    onClick={() => open()}
                    className="flex gap-1 items-center justify-center cursor-pointer hover:bg-gray-100 px-4 py-1 rounded-lg"
                  >
                    <AiFillPicture />
                    <span className="text-sm">Photo</span>
                  </div>
                );
              }}
            </CldUploadWidget>

            <div className="flex gap-1 items-center justify-center cursor-pointer hover:bg-gray-100 px-4 py-1 rounded-lg">
              <FaVideo />
              <span className="text-sm">Video</span>
            </div>

            <div className="flex gap-1 items-center justify-center cursor-pointer hover:bg-gray-100 px-4 py-1 rounded-lg">
              <FaPoll />
              <span className="text-sm">Poll</span>
            </div>

            <div className="flex gap-1 items-center justify-center cursor-pointer hover:bg-gray-100 px-4 py-1 rounded-lg">
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
