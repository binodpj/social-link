import React from "react";
import FriendRequests from "./FriendRequests";
import Birthdays from "./Birthdays";
import Ads from "./Ads";
import UserInfo from "./UserInfo";
import UserMedia from "./UserMedia";

const RightMenu = ({ userId }: { userId?: String }) => {
  return (
    <div>
      {userId && (
        <>
          <UserInfo /> <UserMedia />
        </>
      )}
      <FriendRequests />
      <Birthdays />
      <Ads size="md" />
    </div>
  );
};

export default RightMenu;
