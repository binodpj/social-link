import AddPost from "@/components/AddPost";
import Feed from "@/components/feed/Feed";
import LeftMenu from "@/components/leftMenu/LeftMenu";
import RightMenu from "@/components/rightMenu/RightMenu";

import Story from "@/components/Story";

const HomePage = () => {
  return (
    <div className="flex gap-6 pt-6">
      {/* left menu */}
      <div className="hidden xl:block w-[20%]">
        <LeftMenu />
      </div>

      {/* feed */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <Story />
        <AddPost />
        <Feed />
      </div>

      {/* right menu */}
      <div className="hidden lg:block w-[30%]">
        <RightMenu />
      </div>
    </div>
  );
};

export default HomePage;
