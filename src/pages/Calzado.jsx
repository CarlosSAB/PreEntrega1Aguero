
import { Box } from "@mui/material";
import ItemProduct from "../components/ItemProduct";


const Calzado = () => {
  return (
    <>
      <Box className=" w-100">
      <h1 className="text-center py-5">SHOES</h1>
        <div className="d-flex flex-row align-items-start">
          <ItemProduct filtro="SHOES"></ItemProduct>
        </div>
      </Box>
    </>
  );
};

export default Calzado;
