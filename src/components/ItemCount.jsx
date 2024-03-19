import { useState } from "react";
import "../styles/ItemCount.css";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import * as React from "react";
import { Button } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";

const ItemCount = ({ initial, stock,descriptionItem,priceItem,onAddToCart}) => {

  //Funciones y estados para modificar el Contador de items
  const [count, setCount] = useState(0);

  const increment = () => {
    stock > count ? setCount(count + 1) : setCount(initial);
  };

  const decrement = () => {
    count > initial ? setCount(count - 1) : setCount(stock);
  };


//Funcion del botón ADD TO CART

 const addToCart  =(value)=>{
     (value > 0) ? console.log(`Producto agregado: ${descriptionItem} , Precio: ${priceItem} cantidad agregada : ${value} total: S/.${value*priceItem}`) :  console.log("No items added");

    }

  return (
    <>
      <p className="descripcionItem py-2">Stock: {stock}</p>
      <ButtonGroup
        variant="contained"
        aria-label="Basic button group"
        sx={{
          width: "100%",
        }}
        
      >
        <Button
          sx={{
            width: "20%",
          }}
          onClick={increment}
        >
          +
        </Button>
        <Button
          sx={{
            width: "60%",
          }}
        >
          {count}
        </Button>
        <Button
          sx={{
            width: "20%",
          }}
          onClick={decrement}
        >
          -
        </Button>
      </ButtonGroup>

      <Button
        sx={{
          width: "100%",
          margin: "10px 0",
        }}
        startIcon={<ShoppingCartIcon />}
        variant="outlined"
        onClick={()=> addToCart(count)}
      >
        ADD TO CART
      </Button>
    </>
  );
};

export default ItemCount;
