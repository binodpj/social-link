import Link from "next/link";
import {
  FaLocationDot,
  FaSuitcase,
  FaGraduationCap,
  FaLink,
} from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

const UserInfo = () => {
  return (
    <div className=" p-4 bg-white shadow-lg rounded-lg">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-gray-600">User Information</p>
        <Link
          href={"/"}
          className="text-blue-600 text-xs cursor-pointer hover:border-b-1"
        >
          See all
        </Link>
      </div>

      {/* information */}
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center mt-2">
          <h1 className="font-semibold text-lg">Binod Joshi</h1>
          <p className="text-sm text-gray-500">@binod08</p>
        </div>

        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
          harum voluptates pariatur iusto amet quia dolorum ullam dicta quaerat
          repellendus incidunt.
        </p>

        <div className="flex  items-center gap-2 text-sm">
          <FaLocationDot className="text-gray-500" />
          <p className="text-gray-500">
            Living in <b className="text-gray-600">Punjab</b>
          </p>
        </div>

        <div className="flex  items-center gap-2 text-sm">
          <FaSuitcase className="text-gray-500" />
          <p className="text-gray-500">
            Works at <b className="text-gray-600">Unemployed</b>
          </p>
        </div>

        <div className="flex  items-center gap-2 text-sm">
          <FaGraduationCap className="text-gray-500" />
          <p className="text-gray-500">
            Went to <b className="text-gray-600">Chandigarh University</b>
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <FaLink className="text-gray-500" />
            <Link href={"/"} className="text-sm text-blue-500">
              binod.dev
            </Link>
          </div>

          <div className="text-gray-500 text-sm flex gap-2 items-center">
            <SlCalender />
            <span>Joined on November 2024</span>
          </div>
        </div>

        <button className="text-sm bg-blue-500 p-1.5 rounded-lg text-white cursor-pointer font-semibold">
          Following
        </button>

        <p className="self-end text-xs text-red-400 cursor-pointer">
          Block User
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
