import { Box } from "@mui/material";
import ItemProduct from "../components/ItemProduct";

const Tshirt = () => {
  return (
    <>
      <Box className=" w-100">
        <div className="pt-4">
          <h1 className="text-start ms-3">TSHIRT</h1>
          <p className="text-start ms-3">See all in T-Shirt.</p>
        </div>
        <div className="d-flex flex-row align-items-start">
          <ItemProduct filtro="TSHIRT"></ItemProduct>
        </div>
      </Box>
    </>
  );
};

export default Tshirt;
