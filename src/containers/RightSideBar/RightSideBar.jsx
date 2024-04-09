import { SubdirectoryArrowRightOutlined } from "@mui/icons-material";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useEffect, useState } from "react";
import BoxContent from "../../components/BoxContext";

const TagsList = ({ tags = [], title }) => {
  return (
    <List sx={{ border: "1px solid #f0f0f0" }}>
      <ListItem>{title}</ListItem>
      <Divider />
      {tags.map(({ name }, index) => (
        <Box key={name}>
          <ListItemButton>
            <ListItem>
              {" "}
              <ListItemIcon>
                <SubdirectoryArrowRightOutlined />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          </ListItemButton>
          {index !== tags.length - 1 && <Divider />}
        </Box>
      ))}
    </List>
  );
};

const PopularTags = (props) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const getTags = async () => {
      const response = await fetch("/assets/popularTags.json");
      const { data = [] } = await response.json();
      setTags(data);
    };
    getTags();
  }, []);

  return (
    <Box {...props}>
      <TagsList tags={tags} title="แท็กฮิต" />
    </Box>
  );
};

const ClubTags = (props) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const getTags = async () => {
      const response = await fetch("/assets/clubs.json");
      const { data = [] } = await response.json();
      setTags(data);
    };
    getTags();
  }, []);

  return (
    <Box {...props}>
      <TagsList tags={tags} title="คลับ" />;
    </Box>
  );
};

const RightSideBar = (props) => {
  return (
    <Box {...props}>
      <PopularTags mb={2} />
      <BoxContent />
      <ClubTags mt={2} />
    </Box>
  );
};

export default RightSideBar;
