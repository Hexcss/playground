import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import { IPost } from "../state/actions";

interface IProps {
  post: IPost;
}

const Post: React.FC<IProps> = ({ post }) => {
  const dispatch = useDispatch();
  const { deletePost } = bindActionCreators(actionCreators, dispatch);
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Id: {post.id}
        </Typography>
        <Typography variant="h6" component="div" >
          {post.title}
        </Typography>
        <Typography sx={{ overflow: "hidden", maxWidth: "75ch", textOverflow: "ellipsis", whiteSpace: "nowrap"}} variant="body2">
            {post.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="error" size="small" onClick={() => deletePost(post.id ? post.id : 0)}>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Post;
