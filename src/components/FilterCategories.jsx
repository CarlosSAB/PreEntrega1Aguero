import { useState } from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
  FormControl,
  FormLabel,
  Divider,
  RadioGroup,
  Radio,
  FormControlLabel,
  ListItem,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { NavLink } from "react-router-dom";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const FilterCategories = ({ itemCategories }) => {
  const [open, setOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <>
      <Box
        sx={{
          minWidth: "225px",
          marginTop: "5rem"
        }}
      >

        <List>
          <ListItem>
            <ListItemIcon>
              <FilterAltIcon></FilterAltIcon>
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                component: "h5",
                style: { fontSize: "1rem" , fontWeight: "bold" },
              }}
              primary="FILTER"
            ></ListItemText>
          </ListItem>
        </List>
        <List>
          <ListItemButton onClick={handleClick}>
            <ListItemText
              primaryTypographyProps={{
                component: "p",
                style: { fontSize: ".8rem" },
              }}
              primary="CATEGORIES"
            />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Divider></Divider>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List>
              {itemCategories.map((item) => {
                return (
                  <ListItemButton
                    key={item.name}
                    selected={item.category === selectedCategory}
                    onClick={() => handleCategorySelect(item.category)}
                    component={NavLink}
                    to={item.path}
                    sx={{
                      padding: "10px 40px",
                    }}
                  >
                    <ListItemText
                      primaryTypographyProps={{
                        component: "p",
                        style: { fontSize: ".7rem" },
                      }}
                      primary={item.category}
                    ></ListItemText>
                  </ListItemButton>
                );
              })}
            </List>
          </Collapse>
        </List>
      </Box>
    </>
  );
};

export default FilterCategories;
