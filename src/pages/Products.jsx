
import ItemListProducts from "../components/ItemListProducts";
import { Box } from "@mui/material";
const Products = () => {
  return (
    <>


      <Box className="w-100">
        <h1 className="text-center py-5">PRODUCTS</h1>
        <div className="d-flex flex-row align-item-start">
          <ItemListProducts />
        </div>
      </Box>
    </>
  );
};

export default Products;
