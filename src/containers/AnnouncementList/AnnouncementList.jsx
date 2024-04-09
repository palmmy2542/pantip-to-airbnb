import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AnnouncementItem from "../../components/AnnouncementItem";
import TitleWrapper from "../../components/TitleWrapper";
import { Campaign } from "@mui/icons-material";

const AnnouncementList = () => {
  const [announcements, setAnnouncements] = useState();
  useEffect(() => {
    const getAnnouncements = async () => {
      const response = await fetch("/assets/announcements.json");
      const { data = [] } = await response.json();
      setAnnouncements(data);
    };
    getAnnouncements();
  }, []);
  return (
    <Box>
      <TitleWrapper display={"flex"} alignItems={"ceneter"} gap={1}>
        <Campaign color="warning" />
        <Typography variant="h5">ประกาศ</Typography>
      </TitleWrapper>
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        {announcements &&
          announcements.map((announcement) => (
            <AnnouncementItem
              key={announcement.title}
              title={announcement.title}
              content={announcement.content}
            />
          ))}
      </Box>
    </Box>
  );
};

export default AnnouncementList;
