"use client";

import { acceptRequest, declineRequest } from "@/actions/UserInfo";
import Image from "next/image";
import { useOptimistic, useState } from "react";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import {
  FollowRequest,
  User,
} from "../../../prisma/app/generated/prisma/client";

type followRequestsWithUser = FollowRequest & {
  sender: User;
};

const FriendRequestsList = ({
  followRequests,
}: {
  followRequests: followRequestsWithUser[];
}) => {
  const [requestState, setRequestState] = useState(followRequests);

  const accept = async (requestId: number, userId: string) => {
    addOptimisticRequests(requestId);

    try {
      await acceptRequest(userId);
      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (error) {
      console.log("error while acccepting request", error);
    }
  };

  const decline = async (requestId: number, userId: string) => {
    addOptimisticRequests(requestId);

    try {
      await declineRequest(userId);
      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (error) {
      console.log("error while acccepting request", error);
    }
  };

  const [optimisticRequests, addOptimisticRequests] = useOptimistic(
    requestState,
    (state, value: number) => state.filter((req) => req.id !== value)
  );

  return (
    <div>
      {optimisticRequests.map((request) => (
        <div key={request.id} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={request.sender.avatar || "/no-avatar.png"}
              width={32}
              height={32}
              alt="Picture"
              className="rounded-full ring-2 object-cover h-8 w-8"
            />
            <p>{request.sender.name}</p>
          </div>

          <div className="flex items-center gap-2">
            <form action={() => accept(request.id, request.sender.id)}>
              <button className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer">
                <TiTick className="text-white text-xl" />
              </button>
            </form>

            <form action={() => decline(request.id, request.sender.id)}>
              <button className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer">
                <ImCross className="text-xs text-gray-500" />
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendRequestsList;
