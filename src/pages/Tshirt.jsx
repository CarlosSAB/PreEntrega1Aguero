import { Box } from "@mui/material";
import ItemProduct from "../components/ItemProduct";

const Tshirt = () => {
  return (
    <>
      <Box className=" w-100">
      <h1 className="text-center py-5">TSHIRT</h1>
        <div className="d-flex flex-row align-items-start">
          <ItemProduct filtro="TSHIRT"></ItemProduct>
        </div>
      </Box>
    </>
  );
};

export default Tshirt;
