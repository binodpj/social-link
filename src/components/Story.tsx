import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import React from "react";
import StoryList from "./StoryList";

const Story = async () => {
  //getting current user details
  const session = await auth();

  if (!session?.user?.email) throw new Error("User is not authenticated!");
  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });
  const currentUserId = currentUser?.id;
  //if user is not logged in, return null
  if (!currentUserId) return null;

  //getting stories from the users followed
  const following = await prisma.follower.findMany({
    where: {
      followersId: currentUserId,
    },
    select: {
      followingId: true,
    },
  });

  const followingIds = following.map((f) => f.followingId);
  const ids = [currentUserId, ...followingIds];

  const stories = await prisma.story.findMany({
    where: {
      userId: {
        in: ids,
      },
    },
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  //console.log(stories);

  return (
    <div className="bg-white p-4 rounded-xl shadow-2xl overflow-scroll scrollbar-hide">
      <div className="flex gap-6 w-max">
        <StoryList stories={stories} />
      </div>
    </div>
  );
};

export default Story;
