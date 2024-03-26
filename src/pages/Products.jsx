import ItemListProducts from "../components/ItemListProducts";
import { Box } from "@mui/material";
const Products = () => {
  return (
    <>
      <Box className="w-100">
        <div className="pt-4">
          <h1 className="text-start ms-3">PRODUCTS</h1>
          <p className="text-start ms-3">See all products.</p>
        </div>
        <div className="d-flex flex-row align-item-start">
          <ItemListProducts />
        </div>
      </Box>
    </>
  );
};

export default Products;
