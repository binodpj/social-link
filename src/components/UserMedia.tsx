import Image from "next/image";
import Link from "next/link";

const UserMedia = () => {
  return (
    <div className="my-4 p-4 bg-white shadow-lg rounded-lg">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-gray-600">User Media</p>
        <Link
          href={"/"}
          className="text-blue-600 text-xs cursor-pointer hover:border-b-1"
        >
          See all
        </Link>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <div className="relative">
          <Image
            src="https://images.pexels.com/photos/2598761/pexels-photo-2598761.jpeg?auto=compress&cs=tinysrgb&w=1200"
            height={96}
            width={96}
            alt="photo"
            className="object-cover rounded-lg cursor-pointer"
          />
        </div>

        <div className="relative">
          <Image
            src="https://images.pexels.com/photos/2598761/pexels-photo-2598761.jpeg?auto=compress&cs=tinysrgb&w=1200"
            height={96}
            width={96}
            alt="photo"
            className="object-cover rounded-lg"
          />
        </div>

        <div className="relative">
          <Image
            src="https://images.pexels.com/photos/2598761/pexels-photo-2598761.jpeg?auto=compress&cs=tinysrgb&w=1200"
            height={96}
            width={96}
            alt="photo"
            className="object-cover rounded-lg"
          />
        </div>

        <div className="relative">
          <Image
            src="https://images.pexels.com/photos/2598761/pexels-photo-2598761.jpeg?auto=compress&cs=tinysrgb&w=1200"
            height={96}
            width={96}
            alt="photo"
            className="object-cover rounded-lg"
          />
        </div>

        <div className="relative">
          <Image
            src="https://images.pexels.com/photos/2598761/pexels-photo-2598761.jpeg?auto=compress&cs=tinysrgb&w=1200"
            height={96}
            width={96}
            alt="photo"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default UserMedia;
