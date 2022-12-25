import { Post } from "../interface";
import { timeAgo } from "../utility/timeAgo";
import Author from "./Author";

type Props = {
  post: Post;
};

const Card = ({ post }: Props) => {
  return (
    <>
      <div className="card mt-3">
        <div className="card-header">{post?.id}</div>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.content}</p>
          <p className="card-text">
            by
            {post.userId ? <Author id={post.userId} /> : "unknown user"}
          </p>
          <p className="card-text">{timeAgo(post.date)} ago</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
