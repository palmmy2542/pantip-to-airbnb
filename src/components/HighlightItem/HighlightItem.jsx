import { Box, Typography } from "@mui/material";

const HighlightItem = ({ image_url = [], name }) => {
  return (
    <Box
      borderRadius={2}
      border={"1px solid #f0f0f0"}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      mx={1}
      sx={{ cursor: "pointer" }}
    >
      <img
        src={image_url[1]}
        alt={name}
        style={{ objectFit: "fill", borderRadius: 8 }}
      />
      <Box
        p={1}
        sx={{
          display: "-webkit-box",
          WebkitLineClamp: "2",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
        minHeight={"40px"}
      >
        <Typography variant="body1">{name}</Typography>
      </Box>
    </Box>
  );
};

export default HighlightItem;
