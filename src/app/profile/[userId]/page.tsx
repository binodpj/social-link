import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Image from "next/image";
import React from "react";

const UserProfile = () => {
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
              src="https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              fill
              alt="photo"
              className="rounded-lg object-cover"
            />

            <Image
              src="https://images.pexels.com/photos/3755021/pexels-photo-3755021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              height={120}
              width={120}
              alt="photo"
              className="absolute z-10 object-cover rounded-full h-30 w-30 left-0 right-0 m-auto -bottom-13"
            />
          </div>

          <div className="flex flex-col gap-2 items-center justify-center mt-12">
            <h1 className="text-xl font-bold ">Binod joshi</h1>
            <div className="flex gap-8">
              <div className="flex flex-col items-center justify-center">
                <p className="font-semibold">34</p>
                <p className="text-sm text-gray-700">Posts</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="font-semibold">1.2k</p>
                <p className="text-sm text-gray-700">Followers</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="font-semibold">784</p>
                <p className="text-sm text-gray-700">Followings</p>
              </div>
            </div>
          </div>
        </div>

        <Feed />
      </div>

      {/* right menu */}
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="test-user" />
      </div>
    </div>
  );
};

export default UserProfile;
