import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate, redirect, NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Titles } from "../../ults/names";
import { colorTheme } from "../../ults/color";

const pages = ["Games", "Drama", "News"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  let navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavagation = (page) => {
    console.log(page);

    if (page == "Home Page") {
      navigate(`/`);
    } else {
      navigate(`/articles/${page}`);
    }

    //
  };
  const theme1 = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: colorTheme.PRIMARY_COLOR,
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#11cb5f",
      },
    },
  });

  return (
    <ThemeProvider theme={theme1}>
      <AppBar position="static" color="primary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <LogoDevIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            {/* this is full screen size*/}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {Titles.COMPANY_NAME}
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
                <MenuItem>
                  <Typography style={{ color: "blue" }} textAlign="center">
                    <NavLink to={"/"}>Home Page</NavLink>
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography style={{ color: "blue" }} textAlign="center">
                    <NavLink to={"/articles/Drama"}>Drama</NavLink>
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography style={{ color: "blue" }} textAlign="center">
                    <NavLink to={"/articles/News"}>News</NavLink>
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography style={{ color: "blue" }} textAlign="center">
                    <NavLink to={"/articles/Gaming"}>Gaming</NavLink>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
            <LogoDevIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 0.8 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 1,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {Titles.COMPANY_NAME}
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  style={{ color: "#5B8FB9" }}
                  sx={{ my: 2, mx: 2, pt: 1, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box
              sx={{
                display: { xs: "flex", ml: 1 },
              }}
            >
              <Button
                onClick={handleCloseNavMenu}
                style={{ color: colorTheme.TERTIARY_COLOR }}
                sm={{ pt: 10 }}
                sx={{
                  my: 1,
                  pt: 2,
                  mr: -3,
                  display: "block",
                  sm: { pt: 10 },
                }}
              >
                {<YouTubeIcon />}
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                style={{ color: "#5B8FB9" }}
                sx={{ my: 2, pt: 2, color: "white", display: "block" }}
              >
                {<TwitterIcon />}
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default Navbar;
