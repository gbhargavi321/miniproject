import * as React from "react";
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
import AdbIcon from "@mui/icons-material/Adb";

// import Icon from '@material/icons';
import LoginIcon from '@mui/icons-material/Login';

import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";

const pages = ["Search", "Login"];

const settings = [{ name: "Login", link: "/login", icon: <LoginIcon/>, }];

const ResponsiveAppBar = ({isLogged}) => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  const logout = () => {
    localStorage.removeItem("x-token");
    navigate("/login");
  };

  return (
    // APP NAVIGATION BAR
    <AppBar position="static" style={{ background: "#d51739" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* LOGO SECTION ON LARGE SCREENS */}
          <Box style={{ display: "flex", alignItems: "center" }}>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
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
                letterSpacing: ".2rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Tourist Guide
            </Typography>
          </Box>

          {/* MENU SECTION ON SMALL SCREENS */}
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* LOGO SECTION ON SMALL SCREENS */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Tourist Guide
          </Typography>

          {/* LINKS ON LARGE SCREENS */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            { !isLogged && <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                marginRight: "20px",
                fontWeight: 700,
              }}
              href="/register"
            >
              Register
            </Button>}
          
          { !isLogged &&
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                marginRight: "20px",
                fontWeight: 700,
              }}
              href="/login"
            > 
              Login
            </Button>}

            { isLogged &&
            <Button
              onClick={logout}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                marginRight: "20px",
                fontWeight: 700,
              }}
            > 
              Logout
            </Button>}

          </Box>

          {/* USER AVATAR */}
          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <MenuItem onClick={()=> navigate('/search')} sx={{ marginRight: "10px" }}>
              <SearchIcon />
            </MenuItem>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="P" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {!isLogged && settings.map((setting) => (
                <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                  <div
                    sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  >
                  {setting.icon}
                  </div>
                  <Typography textAlign="center">
                    <a sx={{ textDecoration: "none" }} onClick={()=> navigate(setting.link)}>
                      {setting.name}
                    </a>
                  </Typography>
                </MenuItem>


              ))}

              { isLogged && <MenuItem onClick={logout}>
                <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                <Typography textAlign="center">logout</Typography>
              </MenuItem>}

              


            </Menu>
          </Box>
        </Toolbar>
        
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
