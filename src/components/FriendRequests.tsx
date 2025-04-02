import Image from "next/image";
import Link from "next/link";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const FriendRequests = () => {
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
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=1200"
            width={32}
            height={32}
            alt="Picture"
            className="rounded-full ring-2 object-cover h-8 w-8"
          />
          <p>Binod Joshi</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer">
            <TiTick className="text-white text-xl" />
          </div>
          <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer">
            <ImCross className="text-xs text-gray-500" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=1200"
            width={32}
            height={32}
            alt="Picture"
            className="rounded-full ring-2 object-cover h-8 w-8"
          />
          <p>Abhishekh </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer">
            <TiTick className="text-white text-xl" />
          </div>
          <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer">
            <ImCross className="text-xs text-gray-500" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=1200"
            width={32}
            height={32}
            alt="Picture"
            className="rounded-full ring-2 object-cover h-8 w-8"
          />
          <p>Pawan Kumar</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer">
            <TiTick className="text-white text-xl" />
          </div>
          <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer">
            <ImCross className="text-xs text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
