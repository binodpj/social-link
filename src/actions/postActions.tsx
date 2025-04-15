"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const addPost = async (formData: FormData, img: string) => {
  const desc = formData.get("desc") as string;

  const Desc = z.string().min(1).max(255);

  const validatedDesc = Desc.safeParse(desc);

  if (!validatedDesc.success) {
    //TODO
    console.log("description is not valid");
    return;
  }

  const session = await auth();

  if (!session?.user?.email) throw new Error("User is not authenticated!");
  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  const userId = user?.id;

  if (!userId) throw new Error("User is not authenticated!");

  try {
    await prisma.post.create({
      data: {
        desc: validatedDesc.data,
        userId,
        img,
      },
    });

    revalidatePath("/");
  } catch (err) {
    console.log(err);
  }
};

export const deletePost = async (postId: number) => {
  const session = await auth();

  if (!session?.user?.email) throw new Error("User is not authenticated!");
  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });
  const userId = user?.id;

  if (!userId) throw new Error("User is not authenticated!");

  try {
    await prisma.post.delete({
      where: {
        id: postId,
        userId,
      },
    });
    revalidatePath("/");
  } catch (err) {
    console.log(err);
  }
};

export const switchLike = async (postId: number) => {
  const session = await auth();

  if (!session?.user?.email) throw new Error("User is not authenticated!");
  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });
  const userId = user?.id;

  if (!userId) throw new Error("User is not authenticated!");

  try {
    const existingLike = await prisma.like.findFirst({
      where: {
        postId,
        userId,
      },
    });

    if (existingLike) {
      await prisma.like.delete({
        where: {
          id: existingLike.id,
        },
      });
    } else {
      await prisma.like.create({
        data: {
          postId,
          userId,
        },
      });
    }
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong");
  }
};

export const addComment = async (postId: number, desc: string) => {
  const session = await auth();

  if (!session?.user?.email) throw new Error("User is not authenticated!");
  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });
  const userId = user?.id;

  if (!userId) throw new Error("User is not authenticated!");

  try {
    const createdComment = await prisma.comment.create({
      data: {
        desc,
        userId,
        postId,
      },
      include: {
        user: true,
      },
    });

    return createdComment;
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong!");
  }
};
