import { ProductProvider } from "../context/ProductContext";
import ItemProduct from "./ItemProduct";
const ItemListProducts = () => {
    return ( <>
      <ProductProvider>
        <ItemProduct></ItemProduct>
      </ProductProvider>
    
    </> );
}
 
export default ItemListProducts;