import { Box } from "@mui/material";

const TitleWrapper = ({ children, ...props }) => {
  return (
    <Box mx={1} my={2} borderBottom={"1px solid #f0f0f0"} {...props}>
      {children}
    </Box>
  );
};

export default TitleWrapper;
