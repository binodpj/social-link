import Image from "next/image";
import { IoIosMore } from "react-icons/io";

const Ads = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="mt-4 p-4 bg-white shadow-lg rounded-lg">
      {/* top */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-gray-600">Sponsered Ads</p>
        <IoIosMore className="text-gray-500" />
      </div>

      <div
        className={`flex  flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-32" : size === "md" ? "h-40" : "h-52"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/3764579/pexels-photo-3764579.jpeg?auto=compress&cs=tinysrgb&w=1200"
            fill
            alt="ads image"
            className="rounded-lg object-cover"
          />
        </div>

        <div className={`flex ${size === "sm" ? "gap-2" : "gap-4"}`}>
          <div className="relative">
            <Image
              src="https://images.pexels.com/photos/3764579/pexels-photo-3764579.jpeg?auto=compress&cs=tinysrgb&w=1200"
              width={24}
              height={24}
              alt="ads image"
              className="h-6 w-6 rounded-full "
            />
          </div>
          <p className="font-semibold text-blue-500 cursor-pointer">Bouquets</p>
        </div>

        <p
          className={`${
            size === "sm" ? "text-xs" : size === "md" ? "text-sm" : ""
          }`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          quasi ipsum incidunt officiis rerum deleniti ratione blanditiis harum
          cupiditate, ex quis iusto placeat dolor nobis dignissimos perspiciatis
          quam eaque beatae!
        </p>

        <button className="bg-gray-300 text-gray-600 p-2 rounded-lg cursor-pointer text-sm">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Ads;
