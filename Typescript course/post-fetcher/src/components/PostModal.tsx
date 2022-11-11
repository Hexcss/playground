import { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';

import { IPost } from "../state/actions";
import { AlertSuccess } from "./index";

interface IProps {
  triggered: boolean;
}

const PostModal: React.FC<IProps> = ({ triggered }) => {
  const [success, setSuccess] = useState<boolean>(false);
  const [newPostData, setNewPostData] = useState<IPost>({
    id: Math.round(Math.random() * 100),
    title: "",
    body: "",
  });

  const dispatch = useDispatch();
  const { addPost } = bindActionCreators(actionCreators, dispatch);

  const handleChange = (key: string, value: string) => {
    setNewPostData((state) => ({ ...state, [key]: value }))
  }

  return (
    <Collapse in={triggered}>
      <Box sx={{ mb: 3 }} component="form" onSubmit={(e) => {
        e.preventDefault();
        addPost(newPostData)
        setSuccess(true);
        setNewPostData({
          title: "",
          body: "",
        });
      }}>
        <AlertSuccess success={success} setSuccess={setSuccess} />
        <Stack direction="column" spacing={2}>
          <TextField required label="Post Title" variant="filled" fullWidth value={newPostData.title} name="title" onChange={(e) =>
            handleChange(e.target.name, e.target.value)
          } />
          <TextField required label="Post Body" variant="filled" fullWidth multiline rows={3} maxRows={4} value={newPostData.body} name="body" onChange={(e) =>
            handleChange(e.target.name, e.target.value)
          } />
          <Button type="submit" variant="contained" color="success">
            Submit
          </Button>
        </Stack>
      </Box>
    </Collapse>
  )
};

export default PostModal;
