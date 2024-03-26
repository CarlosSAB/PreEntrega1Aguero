import { useState } from "react";

import NavListDrawer from "./NavListDrawer";
import { Box, Button } from "@mui/material";
import { Drawer, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";

const NavbarUI = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar
          variant="dense"
          sx={{ minHeight: 50, height: 50, backgroundColor: "white" }}
          className="d-flex justify-content-between"
        >
          <div className="d-flex align-items-center">
            <IconButton
              sx={{
                display: { xs: "flex", lg: "none" },
              }}
              color="black"
              size="large"
              onClick={() => setOpen(true)}
            >
              <MenuIcon></MenuIcon>
            </IconButton>
            <img
              style={{ width: "12rem" }}
              src="https://static.vecteezy.com/system/resources/previews/019/766/410/original/adidas-logo-adidas-icon-transparent-free-png.png"
              alt=""
            />
          </div>

          <Box
            className="ps-5"
            sx={{
              display: { xs: "none", lg: "block" },
            }}
          >
            <Button
              sx={{
                color: "black",
              }}
              component={NavLink}
              to="/"
            >
              Home
            </Button>
            <Button
              sx={{
                color: "black",
              }}
              component={NavLink}
              to="/products"
            >
              PRODUCTS
            </Button>
            <Button
              sx={{
                color: "black",
              }}
              component={NavLink}
              to="/contact"
            >
              CONTACT
            </Button>
            
            <IconButton
              aria-label="delete"
              sx={{
                marginLeft: "40px",
              }}
            >
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          display: { xs: "flex", lg: "none" },
        }}
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
      >
        <NavListDrawer></NavListDrawer>
      </Drawer>
    </>
  );
};

export default NavbarUI;
