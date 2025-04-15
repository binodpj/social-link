import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { User } from "../../../prisma/app/generated/prisma/client";

const UserMedia = async ({ user }: { user: User }) => {
  const mediaPosts = await prisma.post.findMany({
    where: {
      userId: user.id,
      img: {
        not: null,
      },
    },
    take: 6,
    orderBy: {
      createdAt: "desc",
    },
  });

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
        {mediaPosts.length ? (
          mediaPosts.map((post) => (
            <div className="relative" key={post.id}>
              <Image
                src={post?.img!}
                height={96}
                width={96}
                alt="photo"
                className="object-cover rounded-lg cursor-pointer"
              />
            </div>
          ))
        ) : (
          <p>No media found!</p>
        )}
      </div>
    </div>
  );
};

export default UserMedia;
