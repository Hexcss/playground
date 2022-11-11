import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { useEffect, useState } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { actionCreators, State } from "./state";
import { PostState } from "./state/actions";
import { Post, PostModal, NavBar } from "./components";

const App = () => {
  const [triggered, setTriggered] = useState<boolean>(false);

  const posts: PostState = useSelector((state: State) => state.data);
  const dispatch = useDispatch();
  const { fetchData } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Box sx={{ position: "sticky"}}>
       <NavBar />
      </Box>
      <Container maxWidth="md">
        <Box sx={{ m: 3 }} display="flex" justifyContent="center" alignItems="center">
          <Stack spacing={2}>
            <Typography component="h1" variant="h2" fontWeight="bold">
              POSTS
            </Typography>
            <Button
              variant="outlined"
              onClick={() => setTriggered(!triggered)}
            >
              {triggered ? "Close Form" : "New Post"}
            </Button>
          </Stack>
        </Box>
        <PostModal triggered={triggered} />
        <Box sx={{ mb: 3 }}>
        <Grid container spacing={2}>
          {posts.map((post) => (
            <Grid item md={6} xs={12}>
              <Post key={post.id} post={post} />
            </Grid>
          ))}
          
        </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default App;
