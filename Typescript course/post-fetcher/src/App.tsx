import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { useEffect, useState } from "react";

import { actionCreators, State } from "./state";
import { PostState } from "./state/actions";
import { Post, PostModal } from "./components";

const App = () => {
  const [triggered, setTriggered] = useState<boolean>(false);

  const posts: PostState = useSelector((state: State) => state.data);
  const dispatch = useDispatch();
  const { fetchData } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <h1 className="text-center mb-3">POSTS</h1>
        <div className="text-center">
          <button
            type="button"
            className="btn btn-primary mb-3"
            onClick={() => setTriggered(!triggered)}
          >
            {triggered ? "Close Form" : "New Post"}
          </button>
          <PostModal triggered={triggered} />
        </div>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default App;
