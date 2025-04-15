"use client";

import Image from "next/image";
import { useActionState, useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { updateProfile } from "@/actions/updateProfile";
import { User } from "../../../prisma/app/generated/prisma/client";

const EditUserInfo = ({ user }: { user: User }) => {
  const [open, setOpen] = useState(false);
  const [cover, setCover] = useState<any>(false);
  const [avatar, setAvatar] = useState<any>(false);

  const [state, formAction] = useActionState(updateProfile, {
    success: false,
    error: false,
  });

  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
    state.success && router.refresh();
  };

  return (
    <div className="">
      <span
        className="text-blue-500 text-xs cursor-pointer  hover:border-b-blue-500 hover:border-b-1"
        onClick={() => setOpen(true)}
      >
        Update
      </span>
      {open && (
        <>
          <div className="absolute z-40 top-0 left-0 h-screen w-screen bg-black opacity-75"></div>
          <div className="absolute w-screen h-screen top-0 left-0  flex items-center justify-center z-50 ">
            <form
              action={(formData) =>
                formAction({
                  formData,
                  cover: cover?.secure_url,
                  avatar: avatar?.secure_url || "",
                })
              }
              className="p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3 relative"
            >
              {/* TITLE */}
              <h1>Update Profile</h1>

              {/* PROFILE PIC UPLOAD */}
              <CldUploadWidget
                uploadPreset="social-link"
                onSuccess={(result) => setAvatar(result.info)}
              >
                {({ open }) => {
                  return (
                    <div
                      className="flex flex-col gap-4 my-4"
                      onClick={() => open()}
                    >
                      <label htmlFor="">Profile Picture</label>
                      <div className="flex items-center gap-2 cursor-pointer">
                        <Image
                          src={user.avatar || "/no-avatar.png"}
                          alt=""
                          width={48}
                          height={32}
                          className="w-12 h-8 rounded-md object-cover"
                        />
                        <span className="text-xs underline text-gray-600">
                          Change
                        </span>
                      </div>
                    </div>
                  );
                }}
              </CldUploadWidget>

              {/* COVER PIC UPLOAD */}
              <CldUploadWidget
                uploadPreset="social-link"
                onSuccess={(result) => setCover(result.info)}
              >
                {({ open }) => {
                  return (
                    <div
                      className="flex flex-col gap-4 my-4"
                      onClick={() => open()}
                    >
                      <label htmlFor="">Cover Picture</label>
                      <div className="flex items-center gap-2 cursor-pointer">
                        <Image
                          src={user.cover || "/no-image.png"}
                          alt=""
                          width={48}
                          height={32}
                          className="w-12 h-8 rounded-md object-cover"
                        />
                        <span className="text-xs underline text-gray-600">
                          Change
                        </span>
                      </div>
                    </div>
                  );
                }}
              </CldUploadWidget>

              {/* WRAPPER */}
              <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
                {/* INPUT */}
                <div className="flex flex-col gap-4">
                  <label htmlFor="" className="text-xs text-gray-500">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder={user.name || "John"}
                    className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                    name="name"
                  />
                </div>

                {/* INPUT */}
                <div className="flex flex-col gap-4">
                  <label htmlFor="" className="text-xs text-gray-500">
                    Description
                  </label>
                  <input
                    type="text"
                    placeholder={user.description || "Life is beautiful..."}
                    className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                    name="description"
                  />
                </div>
                {/* INPUT */}
                <div className="flex flex-col gap-4">
                  <label htmlFor="" className="text-xs text-gray-500">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder={user.city || "New York"}
                    className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                    name="city"
                  />
                </div>
                {/* INPUT */}

                <div className="flex flex-col gap-4">
                  <label htmlFor="" className="text-xs text-gray-500">
                    School
                  </label>
                  <input
                    type="text"
                    placeholder={user.school || "MIT"}
                    className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                    name="school"
                  />
                </div>
                {/* INPUT */}

                <div className="flex flex-col gap-4">
                  <label htmlFor="" className="text-xs text-gray-500">
                    Work
                  </label>
                  <input
                    type="text"
                    placeholder={user.work || "Apple Inc."}
                    className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                    name="work"
                  />
                </div>
                {/* INPUT */}

                <div className="flex flex-col gap-4">
                  <label htmlFor="" className="text-xs text-gray-500">
                    Website
                  </label>
                  <input
                    type="text"
                    placeholder={user.website || "abc.com"}
                    className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                    name="website"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="px-4 py-2 text-sm bg-blue-600 text-white hover:bg-blue-400 cursor-pointer mt-4 rounded-xl"
              >
                Update
              </button>
              {state.success && (
                <span className="text-green-500">
                  Profile has been updated!
                </span>
              )}
              {state.error && (
                <span className="text-red-500">Something went wrong!</span>
              )}
              <div
                className="absolute text-xl right-2 top-3 cursor-pointer"
                onClick={handleClose}
              >
                X
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default EditUserInfo;
