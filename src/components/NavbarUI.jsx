import { useState } from "react";

import NavListDrawer from "./NavListDrawer"
import { Button } from "@mui/material";
import { Drawer, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { width } from "@mui/system";

const NavbarUI = () => {

    const [open, setOpen] = useState(false);

    return (
        <>

            <AppBar position="sticky">
                <Toolbar variant='dense' sx={{ minHeight: 50, height: 50, backgroundColor: "white" }} className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">

                        <IconButton
                            color="black"
                            size="large"
                            onClick={() => setOpen(true)}>
                            <MenuIcon></MenuIcon>
                        </IconButton>
                        <img style={{ width: "12rem"}} src="https://static.vecteezy.com/system/resources/previews/019/766/410/original/adidas-logo-adidas-icon-transparent-free-png.png" alt="" />
                    </div>

                    <div className="px-5">

                        <Button>Products</Button>
                        <Button>SHOES</Button>
                        <Button>T-SHIRT</Button>

                    </div>

                </Toolbar>
            </AppBar>
            <Drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}
            >
                <NavListDrawer></NavListDrawer>
            </Drawer>

        </>
    )
}

export default NavbarUI;