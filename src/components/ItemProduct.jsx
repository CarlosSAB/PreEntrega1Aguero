import { useContext } from "react";
import "../styles/ItemContainer.css";
import { Box, Button } from "@mui/material";
import { ProductContext } from "../context/ProductContext";
import { Link, NavLink } from "react-router-dom";



const ItemProduct = ({filtro}) => {

  const { products } = useContext(ProductContext)
 
  return (
    <>
      <Box className="gridContainer gap-3  p-3 ">
        
        {products

          .filter(
            (item) => !filtro || filtro === "TODO" || item.category === filtro
          )
          .map((item) => (
            <NavLink
              className="cardContainer"
              key={item.item_id}
              style={{
                cursor: "pointer",
                marginBottom: "20px",
              }}
              component={NavLink}
              to={`/products/${item.category}/${item.item_id}`}
            >
              <div className="containerImg">
                <img
                  key={item.urlImagen}
                  src={item.urlImagen}
                  alt={item.descriptionItem}
                />
              </div>
              <div className="containerDesc px-2">
                <p
                  className="descripcionItem text-secondary pt-3"
                  key={item.descriptionItem}
                >
                  {item.descriptionItem}
                </p>
                <div className="d-flex flex-column  justify-content-between">
                  <div>
                    <p className="subdescription" key={item.subdescription}>
                      {item.subdescription}
                    </p>
                    <p className="price fw-semibold" key={item.price}>
                      S/.{item.price}
                    </p>
                  </div>
                </div>
                {/* Aqui sale otro componente */}


              </div>
            </NavLink>
          ))}
      </Box>
    </>
  );
};

export default ItemProduct;
