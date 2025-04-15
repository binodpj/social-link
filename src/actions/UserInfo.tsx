"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const handleFollow = async (userId: string, currentUserId: string) => {
  //   const session = await auth();

  //   let currentUser;
  //   if (session?.user?.email) {
  //     currentUser = await prisma.user.findUnique({
  //       where: {
  //         email: session.user.email,
  //       },
  //     });
  //   }

  //   if (!currentUser) {
  //     throw new Error("User is not authenticated");
  //   }
  //   const currentUserId = currentUser?.id;

  try {
    //find if user is already following
    const existingFollow = await prisma.follower.findFirst({
      where: {
        followersId: currentUserId,
        followingId: userId,
      },
    });

    //if already following
    if (existingFollow) {
      //remove following
      await prisma.follower.delete({
        where: {
          id: existingFollow.id,
        },
      });
    } else {
      //check if follow request is sent, if sent remove else send request

      const existingFollowReq = await prisma.followRequest.findFirst({
        where: {
          senderId: currentUserId,
          receiverId: userId,
        },
      });

      if (existingFollowReq) {
        await prisma.followRequest.delete({
          where: {
            id: existingFollowReq.id,
          },
        });
      } else {
        await prisma.followRequest.create({
          data: {
            senderId: currentUserId,
            receiverId: userId,
          },
        });
      }
    }
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

export const handleBlock = async (userId: string, currentUserId: string) => {
  try {
    const existingBlock = await prisma.block.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: userId,
      },
    });

    if (existingBlock) {
      await prisma.block.delete({
        where: {
          id: existingBlock.id,
        },
      });
    } else {
      await prisma.block.create({
        data: {
          blockerId: currentUserId,
          blockedId: userId,
        },
      });
    }
  } catch (error) {
    console.log("Error in handleblock", error);
  }
};

export const acceptRequest = async (userId: string) => {
  const session = await auth();
  if (!session?.user?.email) {
    throw new Error("User not authenticated");
  }
  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user?.email,
    },
  });

  if (!currentUser) {
    throw new Error("User not authenticated");
  }

  const currentUserId = currentUser?.id;

  try {
    const exixtingFollowRequest = await prisma.followRequest.findFirst({
      where: {
        senderId: userId,
        receiverId: currentUserId,
      },
    });

    if (exixtingFollowRequest) {
      await prisma.followRequest.delete({
        where: {
          id: exixtingFollowRequest.id,
        },
      });
    }

    await prisma.follower.create({
      data: {
        followersId: currentUserId,
        followingId: userId,
      },
    });
  } catch (error) {
    console.log("Error in accepting foloow request,", error);
  }
};

export const declineRequest = async (userId: string) => {
  const session = await auth();
  if (!session?.user?.email) {
    throw new Error("User not authenticated");
  }
  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user?.email,
    },
  });

  if (!currentUser) {
    throw new Error("User not authenticated");
  }

  const currentUserId = currentUser?.id;

  try {
    const exixtingFollowRequest = await prisma.followRequest.findFirst({
      where: {
        senderId: userId,
        receiverId: currentUserId,
      },
    });

    if (exixtingFollowRequest) {
      await prisma.followRequest.delete({
        where: {
          id: exixtingFollowRequest.id,
        },
      });
    }
  } catch (error) {
    console.log("Error in accepting foloow request,", error);
  }
};
