import { Box, Typography } from "@mui/material";

const RoomItem = ({ icon, title, imageUrl }) => {
  return (
    <Box
      border={"1px solid #f0f0f0"}
      p={0.5}
      minWidth={"60px"}
      minHeight={"60px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={1}
    >
      <img
        src={imageUrl}
        alt={title}
        width={40}
        height={40}
        style={{ background: "#2d2a49" }}
      />
      <Typography fontSize={"10px"}>{title}</Typography>
    </Box>
  );
};

export default RoomItem;
