import Image from "next/image";
import Link from "next/link";
import { FaGift } from "react-icons/fa6";

const Birthdays = () => {
  return (
    <div className="mt-4 p-4 bg-white shadow-lg rounded-lg">
      {/* top */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-gray-600">Birthdays</p>
      </div>

      {/* birthdays */}
      <div className="flex items-center justify-between mt-4">
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
          <button className="rounded-lg bg-blue-500 text-white px-2 py-1 text-sm cursor-pointer">
            Celebrate
          </button>
        </div>
      </div>

      {/* upcomming birthdays */}
      <div className="mt-4 bg-slate-100 px-4 py-3 rounded-2xl flex items-center gap-2 cursor-pointer">
        <div>
          <FaGift className="text-3xl text-gray-700" />
        </div>

        <Link href={"/"}>
          <p className="text-sm font-semibold text-gray-800">
            Upcomming Birthdays
          </p>
          <p className="text-xs text-gray-600">
            See other 8 have upcomming birthdays
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Birthdays;
