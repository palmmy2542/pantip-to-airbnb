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
      position={"relative"}
      sx={{
        "& > a": {
          textDecoration: "none",
          color: "black",
          background:
            "linear-gradient(to right, white, white),linear-gradient(to right, #2d2a49, #2d2a49, #2d2a49)",
          backgroundSize: "100% 0.1em, 0 0.1em",
          backgroundPosition: "100% 100%, 0 100%",
          backgroundRepeat: "no-repeat",
          transition: "background-size 400ms",
          "&:after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
        },
        "& > a:hover": {
          backgroundSize: "0 0.1em, 100% 0.1em",
        },
      }}
    >
      <img
        src={imageUrl}
        alt={title}
        width={40}
        height={40}
        style={{ background: "#2d2a49" }}
      />
      <Typography component={"a"} fontSize={"10px"} href="#">
        {title}
      </Typography>
    </Box>
  );
};

export default RoomItem;
