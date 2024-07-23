import "../../assets/css/StyleNav.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../assets/img/Main_Logo_V3.png";
import { Theme } from "../../theme";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  let nav = useNavigate();
  const pages = [
    {
      name: "SYSTEMS",
      nav: "/SYSTEMS",
    },
    {
      name: "MEDIA FILES",
      nav: "/MEDIA-FILES",
    },
    {
      name: "IR RADIOMETRIC",
      nav: "/IR-RADIOMETRIC",
    },
    {
      name: "REMOTE CHANNELS",
      nav: "/REMOTE-CHANNELS",
    },
    {
      name: "CUSTOM MODELS",
      nav: "/CUSTOM-MODELS",
    },
    {
      name: "OTA UPDATES",
      nav: "/OTA-UPDATES",
    },
  ];
  const [anchorElNav, setAnchorElNav] = React.useState("");

  const [clickedIndex, setClickedIndex] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (item, index) => {
    setClickedIndex(index);
    setAnchorElNav(null);
    if (item?.nav) {
      nav(`${item.nav}`);
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: Theme.colors.own }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Open Sans",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={Logo} width={150} alt="1" height={"auto"}></img>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    handleCloseNavMenu(page, index);
                  }}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Open Sans",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={Logo} width={200} alt="1" height={"auto"}></img>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-around",
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={() => {
                  handleCloseNavMenu(page, index);
                }}
                className={`menu-item ${
                  clickedIndex === index ? "active" : ""
                }`}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Roboto",
                  position: "relative",
                  overflow: "hidden",
                  transition:
                    "color 0.3s, transform 0.3s, background-color 0.3s",
                  "&:hover": {
                    color: Theme.colors.primary,
                    fontWeight: 700,

                    // transform: "scale(1.05) translateY(-5px)", // Bay lên một chút khi hover
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "2px",
                    backgroundColor: "red",
                    transform: "scaleX(0)",
                    transition: "transform 0.3s, background-color 0.3s", // Thêm transition cho màu sắc
                  },
                  "&:hover::before": {
                    transform: "scaleX(1)",
                    backgroundColor: "red", // Thay đổi màu sắc khi hover
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
            <Button
              className={`menu-item`}
              onClick={() => {
                window.open("https://docs.gremsy.com/payloads/vio");
              }}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontFamily: "Roboto",
                position: "relative",
                overflow: "hidden",
                transition: "color 0.3s, transform 0.3s, background-color 0.3s",
                "&:hover": {
                  color: Theme.colors.primary,
                  fontWeight: 700,

                  // transform: "scale(1.05) translateY(-5px)", // Bay lên một chút khi hover
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "2px",
                  backgroundColor: "red",
                  transform: "scaleX(0)",
                  transition: "transform 0.3s, background-color 0.3s", // Thêm transition cho màu sắc
                },
                "&:hover::before": {
                  transform: "scaleX(1)",
                  backgroundColor: "red", // Thay đổi màu sắc khi hover
                },
              }}
            >
              SUPPORT
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
