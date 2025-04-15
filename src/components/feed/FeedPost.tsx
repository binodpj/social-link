import React from "react";

import Image from "next/image";
import { IoIosMore } from "react-icons/io";
import { Post, User } from "../../../prisma/app/generated/prisma/client";
import PostInteraction from "./PostInteraction";
import Comments from "./Comments";

type FeedPostType = Post & { user: User } & {
  likes: [{ userId: string }];
} & {
  _count: { comments: number };
};

const FeedPost = ({ post }: { post: FeedPostType }) => {
  console.log(post._count.comments);
  return (
    <div className=" p-4 bg-white shadow-lg rounded-lg flex flex-col gap-2">
      {/* user details */}
      <div className="flex justify-between items-center cursor-pointer">
        <div className="flex justify-around items-center gap-2">
          <Image
            src={post.user.avatar || "/no-avatar.png"}
            width={32}
            height={32}
            alt="Picture"
            className="rounded-full ring-2 object-cover h-8 w-8"
          />

          <span>{post.user.name}</span>
        </div>

        <IoIosMore className="text-gray-500" />
      </div>

      {/* post photo and decs */}
      <div className="flex flex-col gap-2">
        {post.img && (
          <div className="w-full min-h-96 relative">
            <Image
              src={post.img}
              fill
              alt="post image"
              className="rounded-lg object-cover"
            />
          </div>
        )}

        <span className="text-sm">{post.desc}</span>
      </div>

      {/* user interaction */}
      <PostInteraction
        postId={post.id}
        likes={post.likes.map((like) => like.userId)}
        commentNumber={post._count.comments}
        userId={post.userId}
      />

      <Comments postId={post.id} />
    </div>
  );
};

export default FeedPost;
