import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
  GifBox,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import HighlightItem from "../../components/HighlightItem";
import TitleWrapper from "../../components/TitleWrapper";

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
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
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const HighlightGroup = () => {
  const [Highlights, setHighlights] = useState([]);

  useEffect(() => {
    const getHightlights = async () => {
      const response = await fetch("/assets/highlights.json");
      const { data = [] } = await response.json();
      setHighlights(data);
    };
    getHightlights();
  }, []);
  return (
    <Box>
      <TitleWrapper>
        <Typography variant="h5">Highlight</Typography>
      </TitleWrapper>
      <Slider dots={false} pauseOnHover adaptiveHeight {...settings}>
        {Highlights &&
          Highlights.map((highlight) => (
            <HighlightItem key={highlight.title} {...highlight} />
          ))}
      </Slider>
    </Box>
  );
};

export default HighlightGroup;
