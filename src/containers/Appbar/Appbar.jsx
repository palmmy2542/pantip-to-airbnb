import { AccountCircle, SearchOutlined } from "@mui/icons-material";
import {
  AppBar,
  InputBase,
  Toolbar,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "50vw",
      },
    },
  },
}));

const Appbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const listener = () => {
      window.scrollY > 0 ? setIsSticky(true) : setIsSticky(false);
    };

    window.addEventListener("scroll", listener);

    return () => window.removeEventListener("scroll", listener);
  }, []);
  return (
    <AppBar
      position="sticky"
      elevation={isSticky ? 2 : 1}
      sx={{
        backgroundColor: isSticky ? "#2d2a49" : "#b39ddb",
        transition: "all 0.3s ease",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h5"
          noWrap
          component="div"
          sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          color={isSticky ? "#FFF" : "#2d2a49"}
        >
          AirTip
        </Typography>

        <Typography
          variant="h5"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          color={isSticky ? "#FFF" : "#2d2a49"}
        >
          AirTip
        </Typography>
        <Search>
          <SearchIconWrapper
            sx={{
              color: isSticky ? "#FFF" : "#2d2a49",
            }}
          >
            <SearchOutlined />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="ค้นหาบน AirTip"
            inputProps={{
              "aria-label": "search",
              style: {
                color: isSticky ? "#FFF" : "#2d2a49",
                width: isSticky ? "20vw" : "50vw",
              },
            }}
          />
        </Search>
        <AccountCircle
          fontSize="large"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            color: isSticky ? "#FFF" : "#2d2a49",
          }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
