"use client";

import { handleBlock, handleFollow } from "@/actions/UserInfo";
import { useOptimistic, useState } from "react";

const UserInfoInteraction = ({
  userId,
  currentUserId,
  isBlocked,
  isFollowing,
  isFollowReqSent,
}: {
  userId: string;
  currentUserId?: string;
  isBlocked: boolean;
  isFollowing: boolean;
  isFollowReqSent: boolean;
}) => {
  if (!currentUserId || currentUserId === userId) return null;

  const [userState, setUserState] = useState({
    blocked: isBlocked,
    following: isFollowing,
    followReqSent: isFollowReqSent,
  });

  const [optimisticState, addOptimisticState] = useOptimistic(
    userState,
    (state, value: "follow" | "block") =>
      value == "follow"
        ? {
            ...state,
            following: state.following && false,
            followReqSent:
              !state.following && !state.followReqSent ? true : false,
          }
        : {
            ...state,
            blocked: !state.blocked,
          }
  );

  //handling block state
  const block = async () => {
    addOptimisticState("block");
    try {
      await handleBlock(userId, currentUserId);

      setUserState((prev) => ({
        ...prev,
        blocked: !prev.blocked,
      }));
    } catch (error) {
      console.log("Error on block state", error);
    }
  };

  //handling follow state using useOptimistic hook

  const follow = async () => {
    addOptimisticState("follow");
    try {
      await handleFollow(userId, currentUserId);

      setUserState((prev) => ({
        ...prev,
        following: prev.following && false, //if already following, it removes it
        followReqSent: !prev.following && !prev.followReqSent ? true : false,
      }));
    } catch (error) {
      console.log("Error on handle follow", error);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <form
        action={follow}
        className="bg-blue-500 cursor-pointer rounded-lg text-center"
      >
        <button className=" text-sm p-1.5  text-white  font-semibold cursor-pointer">
          {optimisticState.following ? (
            <p>Following</p>
          ) : optimisticState.followReqSent ? (
            <p>Follow Request Sent</p>
          ) : (
            <p>Follow</p>
          )}
        </button>
      </form>
      <form action={block} className="self-end">
        <button className=" text-xs text-red-400 cursor-pointer">
          {optimisticState.blocked ? <p>Unblock User</p> : <p>Block user</p>}
        </button>
      </form>
    </div>
  );
};

export default UserInfoInteraction;
