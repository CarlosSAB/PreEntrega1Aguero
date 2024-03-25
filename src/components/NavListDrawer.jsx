
import { Box } from "@mui/system";
import { useState } from "react";
import { List, ListItemButton, ListItemText, ListItemIcon, Divider } from '@mui/material'
import { NavLink } from "react-router-dom";
import StoreIcon from '@mui/icons-material/Store';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

import * as React from 'react';

import HomeIcon from '@mui/icons-material/Home';

import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
const NavListDrawer = () => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };


    return (
        <>
            <Box sx={{
                backgroundColor: "transparent", width: 250
            }}>
                <nav>
                    <List>
                    <ListItemButton
                        component={NavLink}
                        to="/">
                            <ListItemIcon>
                                <HomeIcon></HomeIcon>
                            </ListItemIcon>
                            <ListItemText primary="Home"></ListItemText>
                        </ListItemButton>
                        <ListItemButton onClick={handleClick}>
                            <ListItemIcon>
                                <StoreIcon />
                            </ListItemIcon>
                            <ListItemText primary="Products" />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}
                                    component={NavLink}
                                    to="/products">
                                    <ListItemIcon>
                                        <MonetizationOnIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="All Products" />
                                </ListItemButton>

                                <ListItemButton sx={{ pl: 4 }}
                                    component={NavLink}
                                    to="/products/SHOES">
                                    <ListItemIcon>
                                        <MonetizationOnIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Calzado"  />
                                </ListItemButton>

                                <ListItemButton sx={{ pl: 4 }}
                                    component={NavLink}
                                    to="/products/TSHIRT">
                                    <ListItemIcon>
                                        <MonetizationOnIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="T-shirt"  />
                                </ListItemButton>
                            </List>
                        </Collapse>

                        <ListItemButton>
                            <ListItemIcon>
                                <LocalGroceryStoreIcon></LocalGroceryStoreIcon>
                            </ListItemIcon>
                            <ListItemText primary="Carrito"></ListItemText>
                        </ListItemButton>
                        <Divider></Divider>
                        <ListItemButton
                        component={NavLink}
                        to="/contact">
                            <ListItemIcon>
                                <SupportAgentIcon></SupportAgentIcon>
                            </ListItemIcon>
                            <ListItemText primary="Contacto"></ListItemText>
                        </ListItemButton>


                    </List>
                </nav>
            </Box>
        </>
    )
}

export default NavListDrawer;