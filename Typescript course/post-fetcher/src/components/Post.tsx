import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import { IPost, PostState } from "../state/actions";

interface IProps {
  post: IPost;
}

const Post: React.FC<IProps> = ({ post }) => {
  const dispatch = useDispatch();
  const { deletePost } = bindActionCreators(actionCreators, dispatch);
  return (
    <div className="card mb-5 p-0 text-center">
      <h5 className="card-header">{post.id}</h5>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => deletePost(post.id ? post.id : 0)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Post;
