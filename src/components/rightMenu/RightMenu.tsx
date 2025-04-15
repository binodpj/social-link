import React, { Suspense } from "react";
import FriendRequests from "./FriendRequests";
import Birthdays from "./Birthdays";
import Ads from "../Ads";
import UserInfo from "./UserInfo";
import UserMedia from "./UserMedia";
import { User } from "../../../prisma/app/generated/prisma/client";

const RightMenu = ({ user }: { user: User }) => {
  return (
    <div>
      {user && (
        <>
          <Suspense fallback="loading...">
            <UserInfo user={user} />{" "}
          </Suspense>
          <Suspense fallback="loading...">
            <UserMedia user={user} />
          </Suspense>
        </>
      )}
      <FriendRequests />
      <Birthdays />
      <Ads size="md" />
    </div>
  );
};

export default RightMenu;
