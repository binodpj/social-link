import Image from "next/image";
import React from "react";

const Story = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-2xl overflow-scroll scrollbar-hide">
      <div className="flex gap-6 w-max">
        <div className="flex flex-col gap-2 justify-center items-center cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=1200"
            width={80}
            height={80}
            alt="Picture"
            className="rounded-full ring-2 object-cover h-20 w-20"
          />
          <span className="text-sm">martin</span>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=1200"
            width={80}
            height={80}
            alt="Picture"
            className="rounded-full ring-2 object-cover h-20 w-20"
          />
          <span className="text-sm">martin</span>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=1200"
            width={80}
            height={80}
            alt="Picture"
            className="rounded-full ring-2 object-cover h-20 w-20"
          />
          <span className="text-sm">martin</span>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=1200"
            width={80}
            height={80}
            alt="Picture"
            className="rounded-full ring-2 object-cover h-20 w-20"
          />
          <span className="text-sm">martin</span>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=1200"
            width={80}
            height={80}
            alt="Picture"
            className="rounded-full ring-2 object-cover h-20 w-20"
          />
          <span className="text-sm">martin</span>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=1200"
            width={80}
            height={80}
            alt="Picture"
            className="rounded-full ring-2 object-cover h-20 w-20"
          />
          <span className="text-sm">martin</span>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=1200"
            width={80}
            height={80}
            alt="Picture"
            className="rounded-full ring-2 object-cover h-20 w-20"
          />
          <span className="text-sm">martin</span>
        </div>
      </div>
    </div>
  );
};

export default Story;
