"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useOptimistic, useState } from "react";
import { Story, User } from "../../prisma/app/generated/prisma/client";
import { addStory } from "@/actions/addStory";
import { useSession } from "next-auth/react";

type StoryWithUser = Story & {
  user: User;
};

const StoryList = ({ stories }: { stories: StoryWithUser[] }) => {
  const [storyList, setStoryList] = useState(stories);
  const [img, setImg] = useState<any>();

  //   const { user, isLoaded } = useUser();
  const { data: session, status } = useSession();
  const user = session?.user;

  const add = async () => {
    if (!user?.email || !img?.secure_url) return;

    addOptimisticStory({
      id: Math.random(),
      img: img.secure_url,
      createdAt: new Date(Date.now()),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      userId: "userId",
      user: {
        id: "userId",
        email: user?.email,
        name: "Uploading...",
        avatar: user?.image || "/no-avatar.png",
        cover: "",
        description: "",
        city: "",
        work: "",
        school: "",
        website: "",
        createdAt: new Date(Date.now()),
      },
    });

    try {
      const createdStory = await addStory(img.secure_url);
      setStoryList((prev) => [createdStory!, ...prev]);
      setImg(null);
    } catch (err) {}
  };

  const [optimisticStories, addOptimisticStory] = useOptimistic(
    storyList,
    (state, value: StoryWithUser) => [value, ...state]
  );
  return (
    <>
      <CldUploadWidget
        uploadPreset="social-link"
        onSuccess={(result, { widget }) => {
          setImg(result.info);
          widget.close();
        }}
      >
        {({ open }) => {
          return (
            <div className="flex flex-col items-center gap-2 cursor-pointer relative">
              <div onClick={() => open()}>
                <Image
                  src={img?.secure_url || user?.image || "/no-avatar.png"}
                  alt=""
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full ring-2 object-cover"
                />
                <div className="absolute text-5xl text-gray-400 top-3 right-7">
                  +
                </div>
              </div>
              {img ? (
                <form action={add}>
                  <button className="text-xs bg-blue-500 p-1 rounded-md text-white">
                    Upload
                  </button>
                </form>
              ) : (
                <span className="text-sm">Add a Story</span>
              )}
            </div>
          );
        }}
      </CldUploadWidget>
      {/* STORY */}
      {optimisticStories.map((story) => (
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
          key={story.id}
        >
          <Image
            src={story.img || "/no-avatar.png"}
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">{story.user.name}</span>
        </div>
      ))}
    </>
  );
};

export default StoryList;
