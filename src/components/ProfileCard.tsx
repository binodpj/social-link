import Image from "next/image";
import React from "react";

const ProfileCard = () => {
  return (
    <div className="mb-4 p-4 bg-white shadow-lg rounded-lg flex flex-col gap-2">
      <div className="relative w-full h-24">
        <Image
          src="https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill
          alt="photo"
          className="rounded-lg object-cover"
        />

        <Image
          src="https://images.pexels.com/photos/3755021/pexels-photo-3755021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          height={72}
          width={72}
          alt="photo"
          className="absolute z-10 object-cover rounded-full h-18 w-18 left-0 right-0 m-auto -bottom-8"
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-1">
        <h1 className="mt-6 font-semibold text-lg">Binod joshi</h1>
        <p className="text-xs text-gray-600">500 Followers</p>
        <button className="py-1.5 px-3 text-sm bg-blue-500 text-white rounded-lg cursor-pointer">
          My Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
