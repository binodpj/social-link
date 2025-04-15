import { prisma } from "@/lib/prisma";
import CommentList from "./CommentList";

const Comments = async ({ postId }: { postId: number }) => {
  const postComments = await prisma.comment.findMany({
    where: {
      postId,
    },
    include: {
      user: true,
    },
  });

  return (
    <div className="mt-4 ">
      <CommentList postComments={postComments} postId={postId} />
    </div>
  );
};

export default Comments;
