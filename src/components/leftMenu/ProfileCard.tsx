import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const ProfileCard = async () => {
  const session = await auth();

  if (!session || !session.user?.email) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user?.email,
    },
    include: {
      _count: {
        select: {
          followers: true,
        },
      },
    },
  });
  //console.log(user);

  return (
    <div className="mb-4 p-4 bg-white shadow-lg rounded-lg flex flex-col gap-2">
      <div className="relative w-full h-24">
        <Image
          src={user?.cover || "/no-image.png"}
          fill
          alt="cover image"
          className="rounded-lg object-cover border"
        />

        <Image
          src={user?.avatar || "/no-avatar.png"}
          height={64}
          width={64}
          alt="photo"
          className="absolute z-10 object-cover rounded-full h-16 w-16 left-0 right-0 m-auto -bottom-7"
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-1">
        <h1 className="mt-6 font-semibold text-lg">{user?.name}</h1>
        <p className="text-xs text-gray-600">
          {user?._count.followers} Followers
        </p>
        <Link
          href={`/profile/${user?.id}`}
          className="mt-2 py-1.5 px-3 text-sm bg-blue-500 text-white rounded-lg cursor-pointer"
        >
          My Profile
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
