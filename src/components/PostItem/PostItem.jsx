import { Comment, Visibility } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";

const renderMatadata = (comments_count, views_count) => {
  if (comments_count && views_count) {
    return (
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={1}
      >
        <Comment color="disabled" />
        <Typography variant="caption">{comments_count}</Typography>
        <Typography variant="caption">|</Typography>
        <Visibility color="disabled" />
        <Typography variant="caption">{views_count}</Typography>
      </Box>
    );
  } else if (comments_count) {
    return (
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={1}
      >
        <Comment color="disabled" />
        <Typography variant="caption">{comments_count}</Typography>
      </Box>
    );
  } else if (views_count) {
    return (
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={1}
      >
        <Visibility color="disabled" />
        <Typography variant="caption">{views_count}</Typography>
      </Box>
    );
  }
};

const PostItem = ({ title, author, comments_count, views_count, diffTime }) => {
  return (
    <Paper
      sx={{
        px: 2,
        py: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: 64,
        mb: 2,
        cursor: "pointer",
      }}
      elevation={4}
    >
      <Box
        sx={{
          display: "-webkit-box",
          WebkitLineClamp: "1",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        <Typography variant="subtitle1">{title}</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography variant="caption">
          {author?.name} - {diffTime} ชั่วโมงที่แล้ว
        </Typography>
        {renderMatadata(comments_count, views_count)}
      </Box>
    </Paper>
  );
};

export default PostItem;
