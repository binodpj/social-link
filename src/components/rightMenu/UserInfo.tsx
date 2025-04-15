import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import {
  FaLocationDot,
  FaSuitcase,
  FaGraduationCap,
  FaLink,
} from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import UserInfoInteraction from "./UserInfoInteraction";
import EditUserInfo from "./EditUserInfo";
import { User } from "../../../prisma/app/generated/prisma/client";

const UserInfo = async ({ user }: { user: User }) => {
  const session = await auth();
  let currentUser;
  if (session?.user?.email) {
    currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });
  }

  let isFollowing = false;
  let isBlocked = false;
  let isFollowReqSent = false;

  const isFollowingRes = await prisma.follower.findFirst({
    where: {
      followersId: currentUser?.id,
      followingId: user.id,
    },
  });
  isFollowingRes ? (isFollowing = true) : (isFollowing = false);

  const isFollowingReqRes = await prisma.followRequest.findFirst({
    where: {
      senderId: currentUser?.id,
      receiverId: user.id,
    },
  });
  isFollowingReqRes ? (isFollowReqSent = true) : (isFollowReqSent = false);

  const isBlockedRes = await prisma.block.findFirst({
    where: {
      blockerId: currentUser?.id,
      blockedId: user.id,
    },
  });
  isBlockedRes ? (isBlocked = true) : (isBlocked = false);

  return (
    <div className=" p-4 bg-white shadow-lg rounded-lg">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-gray-600">User Information</p>
        {user.id === currentUser?.id ? (
          <EditUserInfo user={user} />
        ) : (
          <Link
            href={"/"}
            className="text-blue-600 text-xs cursor-pointer hover:border-b-1"
          >
            See all
          </Link>
        )}
      </div>

      {/* information */}
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center mt-2">
          <h1 className="font-semibold text-lg">{user.name}</h1>
        </div>

        <p className="text-sm text-gray-500">{user.description}</p>
        {user.city && (
          <div className="flex  items-center gap-2 text-sm">
            <FaLocationDot className="text-gray-500" />

            <p className="text-gray-500">
              Living in <b className="text-gray-600">{user.city}</b>
            </p>
          </div>
        )}
        {user.work && (
          <div className="flex  items-center gap-2 text-sm">
            <FaSuitcase className="text-gray-500" />

            <p className="text-gray-500">
              Works at <b className="text-gray-600">{user.work}</b>
            </p>
          </div>
        )}
        {user.school && (
          <div className="flex  items-center gap-2 text-sm">
            <FaGraduationCap className="text-gray-500" />
            <p className="text-gray-500">
              Went to <b className="text-gray-600">{user.school}</b>
            </p>
          </div>
        )}

        <div className="flex items-center justify-between">
          {user.website && (
            <div className="flex gap-2 items-center">
              <FaLink className="text-gray-500" />
              <Link href={"/"} className="text-sm text-blue-500">
                {user.website}
              </Link>
            </div>
          )}

          <div className="text-gray-500 text-sm flex gap-2 items-center">
            <SlCalender />
            <div>
              Joined <span>{user.createdAt.getFullYear()}</span>-
              <span>{user.createdAt.getMonth()}</span>-
              <span>{user.createdAt.getDay()}</span>
            </div>
          </div>
        </div>

        <UserInfoInteraction
          userId={user.id}
          currentUserId={currentUser?.id}
          isBlocked={isBlocked}
          isFollowing={isFollowing}
          isFollowReqSent={isFollowReqSent}
        />
      </div>
    </div>
  );
};

export default UserInfo;
