/* eslint-disable react/jsx-key */
import AbcIcon from "@mui/icons-material/Abc";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import { Box, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import RoomItem from "../../components/RoomItem/RoomItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../slices/roomSlices";

const icons = [
  <AbcIcon />,
  <AcUnitIcon />,
  <AccessAlarmIcon />,
  <AddRoadIcon />,
];

const RoomList = () => {
  const dispatch = useDispatch();
  const rooms = [];
  const isLoading = useSelector((state) => state.rooms.loading);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const listener = () => {
      window.scrollY > 300 ? setIsSticky(true) : setIsSticky(false);
    };

    window.addEventListener("scroll", listener);

    return () => window.removeEventListener("scroll", listener);
  }, []);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (isLoading) {
    return <></>;
  }

  return (
    <Paper
      sx={{
        position: "sticky",
        top: 64,
        zIndex: 2,
        bgcolor: "#FFF",
      }}
      elevation={isSticky ? 3 : 0}
    >
      <Box display={"flex"} overflow={"auto"}>
        {Array.isArray(rooms) &&
          rooms.map((room) => (
            <RoomItem
              key={room.title}
              icon={icons[Math.round(Math.random() * 3)]}
              title={room.name}
              imageUrl={room.imageUrl}
            />
          ))}
      </Box>
    </Paper>
  );
};

export default RoomList;
