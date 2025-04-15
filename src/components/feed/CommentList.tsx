"use client";

import Image from "next/image";
import React, { useOptimistic, useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { IoIosMore } from "react-icons/io";
import { MdEmojiEmotions } from "react-icons/md";
import { Comment, User } from "../../../prisma/app/generated/prisma/client";
import { useSession } from "next-auth/react";
import { addComment } from "@/actions/postActions";

type CommentWithUser = Comment & { user: User };

const CommentList = ({
  postComments,
  postId,
}: {
  postComments: CommentWithUser[];
  postId: number;
}) => {
  const { data: session, status } = useSession();
  const user = session?.user;

  const [commentState, setCommentState] = useState(postComments);
  const [desc, setDesc] = useState("");

  const add = async () => {
    if (!user?.email || !desc) return;

    addOptimisticComment({
      id: Math.random(),
      desc,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
      userId: Math.random().toString(),
      postId: postId,
      user: {
        id: "random",
        email: user.email,
        name: "Sending Please Wait...",
        avatar: user.image || "/noAvatar.png",
        cover: "",
        description: "",
        city: "",
        work: "",
        school: "",
        website: "",
        createdAt: new Date(Date.now()),
      },
    });
    try {
      const createdComment = await addComment(postId, desc);
      setCommentState((prev) => [createdComment, ...prev]);
      console.log(createdComment);
    } catch (err) {}
  };

  const [optimisticComments, addOptimisticComment] = useOptimistic(
    commentState,
    (state, value: CommentWithUser) => [value, ...state]
  );
  return (
    <div>
      {/* add comment */}
      {user && (
        <div className="flex gap-4">
          <Image
            src={user.image || "/no-avatar.png"}
            width={32}
            height={32}
            alt="Picture"
            className="rounded-full ring-2 object-cover h-8 w-8"
          />

          <form
            action={add}
            className="bg-slate-100 flex items-center px-4 flex-1 justify-between rounded-lg"
          >
            <input
              type="text"
              placeholder="Write a comment ..."
              className="py-1 rounded-lg outline-none"
              onChange={(e) => setDesc(e.target.value)}
            />
            <MdEmojiEmotions className="text-xl text-yellow-600 cursor-pointer" />
          </form>
        </div>
      )}
      {/* prev comments */}
      {optimisticComments.map((comment) => (
        <div key={comment.id} className="mt-4 flex  gap-2">
          <div>
            <Image
              src={comment.user.avatar || "/no-avatar.png"}
              width={32}
              height={32}
              alt="Picture"
              className="rounded-full ring-2 object-cover h-8 w-8"
            />
          </div>

          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between">
              <p>{comment.user.name}</p>
              <IoIosMore className="text-gray-600" />
            </div>

            <div className="text-sm">
              <p>{comment.desc}</p>
            </div>

            <div className="flex gap-2 items-center text-gray-600 text-sm bg-slate-50 px-2 w-fit mt-2">
              <AiFillLike className="cursor-pointer" />

              <span>|</span>
              <p className="flex">
                54 <span className="hidden pl-1 sm:block">Likes</span>
              </p>

              <p className="pl-6 cursor-pointer">Reply</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
