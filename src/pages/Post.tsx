import { useAppDispatch, useAppSelector } from "../app";
import AddPost from "../component/AddPost";
import Card from "../component/Card";
import { getAllPost } from "../features";

type Props = {};

const Post = (props: Props) => {
  let posts = useAppSelector(getAllPost);
  let dispatch = useAppDispatch();
  return (
    <>
      <AddPost />
      <p className="h5 fw-bold fs-5 mt-5">Post</p>
      {posts.map(post => (
        <Card {...{ post }} key={post.id} />
      ))}
    </>
  );
};

export default Post;
