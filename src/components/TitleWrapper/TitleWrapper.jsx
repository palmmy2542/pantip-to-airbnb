import { Box, Divider } from "@mui/material";

const TitleWrapper = ({ children, ...props }) => {
  return (
    <>
      <Box mx={1} mt={2} {...props}>
        {children}
      </Box>
      <Divider sx={{ mt: 1, mb: 2 }} />
    </>
  );
};

export default TitleWrapper;
