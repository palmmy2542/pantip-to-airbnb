import { Box, Typography } from "@mui/material";

const AnnouncementItem = ({ title, content }) => {
  return (
    <Box borderRadius={2} border={"1px solid #f0f0f0"} px={2} py={1}>
      <Typography>{title}</Typography>
      <Typography>{content}</Typography>
    </Box>
  );
};

export default AnnouncementItem;
