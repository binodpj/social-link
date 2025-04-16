"use client";

import { deletePost } from "@/actions/postActions";
import Image from "next/image";
import { useState } from "react";
import { IoIosMore } from "react-icons/io";

const PostInfo = ({ postId }: { postId: number }) => {
  const [open, setOpen] = useState(false);

  //used bind method to pass the postId or we can use hidden input to pass it as formdata
  const deletePostWithId = deletePost.bind(null, postId);
  return (
    <div className="relative">
      <IoIosMore
        className="text-gray-500 cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />

      {open && (
        <div className="absolute top-4 right-0 bg-white p-4 w-32 rounded-lg flex flex-col gap-2 text-xs shadow-lg z-30">
          <span className="cursor-pointer">View</span>
          <span className="cursor-pointer">Re-post</span>
          <form action={deletePostWithId}>
            <button className="text-red-500 cursor-pointer">Delete</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PostInfo;
