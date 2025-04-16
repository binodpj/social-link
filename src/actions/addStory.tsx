"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const addStory = async (img: string) => {
  const session = await auth();

  if (!session?.user?.email) throw new Error("User is not authenticated!");
  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });
  const userId = user?.id;

  if (!userId) throw new Error("User is not authenticated!");

  //if previous story exists, it is remove it and create new one
  try {
    const existingStory = await prisma.story.findFirst({
      where: {
        userId,
      },
    });

    if (existingStory) {
      await prisma.story.delete({
        where: {
          id: existingStory.id,
        },
      });
    }
    const createdStory = await prisma.story.create({
      data: {
        userId,
        img,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      },
      include: {
        user: true,
      },
    });

    return createdStory;
  } catch (err) {
    console.log(err);
  }
};
