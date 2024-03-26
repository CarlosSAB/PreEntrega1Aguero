
import { Box } from "@mui/material";
import ItemProduct from "../components/ItemProduct";


const Calzado = () => {
  return (
    <>
      <Box className=" w-100">
      <div className="pt-4">
          <h1 className="text-start ms-3">SHOES</h1>
          <p className="text-start ms-3">See all Shoes.</p>
        </div>
        <div className="d-flex flex-row align-items-start">
          <ItemProduct filtro="SHOES"></ItemProduct>
        </div>
      </Box>
    </>
  );
};

export default Calzado;
