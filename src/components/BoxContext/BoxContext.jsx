import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import HighlightItem from "../../components/HighlightItem";

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: (
    <ArrowForwardIosOutlined
      sx={{
        borderColor: "red",
        border: "1px solid",
        borderRadius: "50%",
        p: 1,
        right: 10,
        bgcolor: "#FFF",
        color: "#000",
        ":hover": {
          borderColor: "red",
          border: "1px solid",
          borderRadius: "50%",
          p: 1,
          right: 10,
          bgcolor: "#FFF",
          color: "#000",
        },
      }}
    />
  ),
  prevArrow: (
    <ArrowBackIosOutlined
      sx={{
        zIndex: 1,
        borderColor: "red",
        border: "1px solid",
        borderRadius: "50%",
        p: 1,
        left: 10,
        bgcolor: "#FFF",
        color: "#000",
        ":hover": {
          borderColor: "red",
          border: "1px solid",
          borderRadius: "50%",
          p: 1,
          left: 10,
          bgcolor: "#FFF",
          color: "#000",
        },
      }}
    />
  ),
};
const BoxContent = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const getContent = async () => {
      const response = await fetch("/assets/sidebarContent.json");
      const { data = [] } = await response.json();
      setContents(data);
    };
    getContent();
  }, []);

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      {contents &&
        contents.map((content) => (
          <HighlightItem key={content.title} {...content} />
        ))}
    </Box>
  );
};

export default BoxContent;
