import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { Box,Button } from "@mui/material";
import { Divider } from "@mui/material";

const ProductPage = () => {
  const { category, item_id } = useParams();
  const { products } = useContext(ProductContext);
  const product = products.find(
    (product) => product.item_id === parseInt(item_id)
  );

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    // <Box className="w-100 d-md-flex mt-5" sx={{

    //   border: "1px solid black"
    // }}>
    //   <Box className="d-flex align-items-center justify-content-center"
    //   >
    //     <img src={product.urlImagen} alt={product.descriptionItem} style={{
    //       minWidth: "450px",
    //       height: "450px",
    //       objectFit: "cover"
    //     }}/>
    //   </Box>

    //   <Box
    //     className="d-flex flex-column py-3"
    //     sx={{
    //       width: { xs: "100%", md:"40%"}
    //     }}
    //   >
    //     <div className="d-flex flex-row justify-content-between align-items-center">
    //       <p>ADIDAS</p>
    //       <p>CÓDIGO: {product.item_id}</p>
    //     </div>
    //     <div className="py-4">
    //     <h2>{product.descriptionItem}</h2>
    //     <p>{product.subdescription}</p>
    //     </div>
    //     <h5 className="pb-3">S/. {product.price}</h5>
    //     <Divider></Divider>
    //     <p className="pt-3 fw-bold">NO DESCUENTO</p>
    //     <p>Sobre este articulo no aplica ningún tipo de descuento</p>

    //   </Box>
    // </Box>
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "75%",

            display: "flex",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <Box sx={{width: "50%"}}>
            <img
              src={product.urlImagen}
              alt={product.descriptionItem}
              style={{
                minWidth: "100%",
                height: "500px",
                objectFit: "cover"

                
              }}
            />
          </Box>

          <Box sx={{width:"50%", padding:"20px"}}>
            <div className="d-flex flex-row justify-content-between">
              <p>ADIDAS</p>
              <p>CÓDIGO: {product.item_id}</p>
            </div>
            <h2 className="pt-5">{product.descriptionItem}</h2>
            <p>{product.category}</p>
            <div className="py-4">
              <h3 className="fw-bold">S/. {product.price}</h3>
              <p>Lowest Price</p>
            </div>
            <Divider></Divider>
            <p className="fw-bold">NO DESCUENTO</p>
            <p>Sobre este articulo no aplica ningún tipo de descuento</p>
            <Button variant="outlined" className="w-100 mt-5">Añadir al carrito</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductPage;
