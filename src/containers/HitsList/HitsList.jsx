import { Box, Button, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import PostItem from "../../components/PostItem";
import TitleWrapper from "../../components/TitleWrapper";

const HitsList = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getTags = async () => {
      const response = await fetch("/assets/hits.json");
      const { data = [] } = await response.json();
      setPosts(data);
    };
    getTags();
  }, []);

  return (
    <Box {...props}>
      <TitleWrapper>
        <Typography variant="h5">🔥Pantip Hits</Typography>
        <Typography variant="caption">กระทู้ฮิตติดเทรนด์ทุก 10 นาที</Typography>
      </TitleWrapper>
      {posts &&
        posts.map(
          ({ title, views_count, comments_count, author, created_time }) => {
            return (
              <PostItem
                key={title}
                title={title}
                comments_count={comments_count}
                views_count={views_count}
                author={author}
                diffTime={dayjs(new Date()).diff(dayjs(created_time), "hours")}
              />
            );
          }
        )}
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

export default HitsList;
