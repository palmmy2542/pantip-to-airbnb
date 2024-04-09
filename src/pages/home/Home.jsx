import { Box } from "@mui/material";
import AnnouncementList from "../../containers/AnnouncementList";
import Appbar from "../../containers/Appbar";
import HighlightGroup from "../../containers/HighlightGroup";
import PostList from "../../containers/PostList";
import RoomList from "../../containers/RoomList";
import RightSideBar from "../../containers/RightSideBar";
import HitsList from "../../containers/HitsList";
import PicksList from "../../containers/PicksList/PicksList";

const Home = () => {
  return (
    <>
      <Appbar />
      <Box
        sx={{
          backgroundImage:
            "url('https://ptcdn.info/doodle/2024/5d07273900d01f33da0f618c_kltlxiu7k8.png')",
          backgroundSize: "cover",
          height: "300px",
          width: "100%",
        }}
      />
      <RoomList />
      <Box maxWidth={"1440px"} mx={"auto"}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          px={{ xs: 3, md: 8 }}
          pb={10}
          gap={2}
        >
          <AnnouncementList />
          <HighlightGroup />
          <PicksList />

          <Box display={"flex"} gap={4}>
            <Box flex={1}>
              <HitsList />
              <PostList />
            </Box>
            <RightSideBar flex={0.5} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
