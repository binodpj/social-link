import Feed from "@/components/feed/Feed";
import LeftMenu from "@/components/leftMenu/LeftMenu";
import RightMenu from "@/components/rightMenu/RightMenu";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export default async function UserProfile({
  params,
}: {
  params: { userId: string };
}) {
  const userId = params.userId;

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      _count: {
        select: {
          followers: true,
          followings: true,
          posts: true,
        },
      },
    },
  });

  //console.log(user);
  if (!user) return notFound();

  //checking if current user is blocked by user whose profile is open
  let isBlocked = false;

  const session = await auth();
  if (session) {
    const res = await prisma.block.findFirst({
      where: {
        blockerId: userId,
        blockedId: session.user?.id,
      },
    });
    if (res) {
      isBlocked = true;
    }
  }

  if (isBlocked) return notFound();

  return (
    <div className="flex gap-6 pt-6">
      {/* left menu */}
      <div className="hidden xl:block w-[20%]">
        <LeftMenu userId="testId" />
      </div>

      {/* feed */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="mb-4 p-4 bg-white shadow-lg rounded-lg flex flex-col gap-2">
          <div className="relative w-full h-40">
            <Image
              src={user?.cover || "/no-image.png"}
              fill
              alt="photo"
              className="rounded-lg object-cover"
            />

            <Image
              src={user?.avatar || "/no-avatar.png"}
              height={120}
              width={120}
              alt="photo"
              className="absolute z-10 object-cover rounded-full h-30 w-30 left-0 right-0 m-auto -bottom-13"
            />
          </div>

          <div className="flex flex-col gap-2 items-center justify-center mt-12">
            <h1 className="text-xl font-bold ">{user.name}</h1>
            <div className="flex gap-8">
              <div className="flex flex-col items-center justify-center">
                <p className="font-semibold">{user._count.posts}</p>
                <p className="text-sm text-gray-700">Posts</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="font-semibold">{user._count.followers}</p>
                <p className="text-sm text-gray-700">Followers</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="font-semibold">{user._count.followings}</p>
                <p className="text-sm text-gray-700">Followings</p>
              </div>
            </div>
          </div>
        </div>

        <Feed userId={userId} />
      </div>

      {/* right menu */}
      <div className="hidden lg:block w-[30%]">
        <RightMenu user={user} />
      </div>
    </div>
  );
}
