import { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

import { IPost } from "../state/actions";

interface IProps {
  triggered: boolean;
}

const PostModal: React.FC<IProps> = ({ triggered }) => {
  const [newPostData, setNewPostData] = useState<IPost>({
    id: Math.round(Math.random()*100),
    title: "",
    body: "",
  });

  const dispatch = useDispatch();
  const { addPost } = bindActionCreators(actionCreators, dispatch);

  const handleChange = (key: string, value: string) => {
    setNewPostData((state) => ({ ...state, [key]: value }))
  }

  return triggered ? (
    <form className="mb-5" onSubmit={(e) => {
        e.preventDefault();
        addPost(newPostData)
    }}>
      <div className="form-group mb-3">
        <label htmlFor="postTitle">Post Title</label>
        <input
          type="text"
          className="form-control"
          id="postTitle"
          placeholder="Enter your post's title"
          value={newPostData.title}
          name="title"
          onChange={(e) =>
            handleChange(e.target.name, e.target.value)
          }
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="postBody">Post Body</label>
        <textarea className="form-control" id="postBody" rows={3} value={newPostData.body} name="body" onChange={(e) =>
            handleChange(e.target.name, e.target.value)}></textarea>
      </div>
      <div className="form-group mb-3">
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </div>
      <hr />
    </form>
  ) : (
    <></>
  );
};

export default PostModal;
