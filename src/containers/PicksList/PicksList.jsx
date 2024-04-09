import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import PostItem from "../../components/PostItem";
import TitleWrapper from "../../components/TitleWrapper";

const PicksList = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getTags = async () => {
      const response = await fetch("/assets/picks.json");
      const { data = [] } = await response.json();
      setPosts(data);
    };
    getTags();
  }, []);

  return (
    <Box {...props}>
      <TitleWrapper>
        <Typography variant="h5">⭐️ Pantip Picks</Typography>
        <Typography variant="caption">
          กระทู้คุณภาพคัดเลือกโดยทีมงาน Pantip
        </Typography>
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
    </Box>
  );
};

export default PicksList;
