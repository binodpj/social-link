import Link from "next/link";
import FriendRequestsList from "./FriendRequestsList";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { User } from "../../../prisma/app/generated/prisma/client";

const FriendRequests = async () => {
  const session = await auth();
  //if user is not authenticated, follow request is not seen
  if (!session?.user?.email) {
    return null;
  }

  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user?.email,
    },
  });

  const currentUserId = currentUser?.id;


  const followRequests = await prisma.followRequest.findMany({
    where: {
      receiverId: currentUserId,
    },
    include: {
      sender: true,
    },
  });

  //if no follow requests
  if (followRequests.length === 0) return null;

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg flex flex-col gap-4">
      {/* top */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-gray-600">Friend Requests</p>
        <Link
          href={"/"}
          className="text-blue-600 text-xs cursor-pointer hover:border-b-1"
        >
          See all
        </Link>
      </div>

      {/* requests */}

      <FriendRequestsList followRequests={followRequests} />
    </div>
  );
};

export default FriendRequests;
