"use client";

import { switchLike } from "@/actions/postActions";
import { useSession } from "next-auth/react";
import { useOptimistic, useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots, FaShare } from "react-icons/fa6";

const PostInteraction = ({
  postId,
  likes,
  commentNumber,
  userId,
}: {
  postId: number;
  likes: string[];
  commentNumber: number;
  userId: string;
}) => {
  const [likeState, setLikeState] = useState({
    likeCount: likes.length,
    isLiked: userId ? likes.includes(userId) : false,
  });

  const [optimisticLike, switchOptimisticLike] = useOptimistic(
    likeState,
    (state, value) => {
      return {
        likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
        isLiked: !state.isLiked,
      };
    }
  );

  const likeAction = async () => {
    switchOptimisticLike("");
    try {
      switchLike(postId);
      setLikeState((state) => ({
        likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
        isLiked: !state.isLiked,
      }));
    } catch (err) {}
  };

  return (
    <div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-4">
          <div className="flex gap-2 items-center justify-center bg-slate-100 px-4 py-1 rounded-2xl">
            <form action={likeAction}>
              <button>
                {optimisticLike.isLiked ? (
                  <AiFillLike className="cursor-pointer" />
                ) : (
                  <AiOutlineLike className="cursor-pointer" />
                )}
              </button>
            </form>

            <span className="text-gray-400">|</span>

            <div className="flex">
              <span>{optimisticLike.likeCount} </span>
              <span className="ml-1 hidden sm:block">Likes</span>
            </div>
          </div>

          <div className="flex gap-2 items-center justify-center bg-slate-100 px-4 py-1 rounded-2xl">
            <FaRegCommentDots className="" />

            <span className="text-gray-400">|</span>

            <div className="flex">
              <span>{commentNumber}</span>
              <span className="ml-1 hidden sm:block">Comments</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-center justify-center bg-slate-100 px-4 py-1 rounded-2xl">
          <FaShare className="" />

          <span className="text-gray-400">|</span>

          <div className="flex">
            <span className="ml-1 hidden sm:block">Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostInteraction;
