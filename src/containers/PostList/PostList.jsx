import { Box, Button, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "../../components/PostItem";
import TitleWrapper from "../../components/TitleWrapper";
import { fetchData } from "../../slices/postSlices";

const PostList = (props) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => {
    console.log(state);
    return state.data.data;
  });
  const rooms = useSelector((state) => state.rooms.data);
  console.log(rooms);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <Box {...props}>
      {posts &&
        rooms &&
        posts.map(({ room_name_th, topics }) => {
          const room = rooms.find((room) => room_name_th === room.room_name_th);

          return (
            <Box key={room_name_th}>
              <TitleWrapper>
                {/* <img src={room["image_url"]} /> */}
                <Typography variant="h5">{room_name_th}</Typography>
              </TitleWrapper>
              {topics &&
                topics.map(
                  ({
                    title,
                    views_count,
                    comments_count,
                    author,
                    created_time,
                  }) => {
                    return (
                      <PostItem
                        key={title}
                        title={title}
                        comments_count={comments_count}
                        views_count={views_count}
                        author={author}
                        diffTime={dayjs(new Date()).diff(
                          dayjs(created_time),
                          "hours"
                        )}
                      />
                    );
                  }
                )}
            </Box>
          );
        })}
      <Button
        fullWidth
        variant="contained"
        sx={{
          bgcolor: "#b39ddb",
          ":hover": {
            bgcolor: "#2d2a49",
          },
        }}
      >
        ดูเพิ่มเติม
      </Button>
    </Box>
  );
};

export default PostList;
