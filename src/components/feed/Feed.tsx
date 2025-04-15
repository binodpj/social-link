import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import FeedPost from "./FeedPost";

const Feed = async ({ userId }: { userId?: string }) => {
  const session = await auth();
  if (!session?.user?.email) {
    throw new Error("User not authenticated");
  }
  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });
  const currentUserId = currentUser?.id;

  let posts: any[] = [];

  //getting posts for user profile
  if (userId) {
    posts = await prisma.post.findMany({
      where: {
        user: {
          id: userId,
        },
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  //if user is not viewing its profile, getting posts from followings
  if (!userId && currentUserId) {
    const following = await prisma.follower.findMany({
      where: {
        followersId: currentUserId,
      },
      select: {
        followingId: true,
      },
    });

    const followingIds = following.map((f) => f.followingId);
    const ids = [currentUserId, ...followingIds];

    posts = await prisma.post.findMany({
      where: {
        userId: {
          in: ids,
        },
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
  return (
    <div className="mt-4">
      {posts.length ? (
        <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-12">
          {posts.map((post) => (
            <FeedPost key={post.id} post={post} />
          ))}
        </div>
      ) : (
        "No posts found!"
      )}
    </div>
  );
};

export default Feed;
