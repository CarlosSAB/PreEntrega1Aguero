import ItemContainer from "../components/ItemContainer";
import Titulo from "../components/Titulo.jsx";
import Categories from "../components/Categories.jsx";
import { List,ListItemButton,ListItemText,ListItemIcon,Collapse } from '@mui/material'
import { Box } from '@mui/material'
import { useState } from 'react'
import { NavLink } from "react-router-dom";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';



const All = ({ message, itemCategories }) => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);

    }

  return (
    <>
      {/* Acceso a la prop itemCategories */}
      <div className="d-flex flex-row  justify-content-between container-md py-3">
        <Titulo message={message} />
        <Categories itemCategories={itemCategories}></Categories>
      </div>
      <div className="d-flex flex-row container-lg gap-4">
        <Box sx={{
            padding:"0 10px",
            minWidth: "250px",
            backgroundColor: "#ebeae8",

        }}>
            <List>
            <ListItemButton onClick={handleClick}>

                            <ListItemText primary="CATEGORIES" />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}
                                    component={NavLink}
                                    to="/All">

                                    <ListItemText primary="All Products" />
                                </ListItemButton>

                                <ListItemButton sx={{ pl: 4 }}
                                    component={NavLink}
                                    to="/calzado">

                                    <ListItemText primary="Calzado"  />
                                </ListItemButton>

                                <ListItemButton sx={{ pl: 4 }}
                                    component={NavLink}
                                    to="/tshirt">

                                    <ListItemText primary="T-shirt"  />
                                </ListItemButton>
                            </List>
                        </Collapse>
            </List>
        </Box>
        <ItemContainer filtro="TODO" />
      </div>

      {/* Otro componente o código aquí */}
    </>
  );
};

export default All;
