import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

const ProductPage = () => {
  const { category,item_id } = useParams();
  const { products } = useContext(ProductContext);
  const product = products.find(product => product.item_id === parseInt(item_id));

  if (!product) {
    return <div>Producto no encontrado</div>; 
  }

  return (
    <div>
      <h2>{product.descriptionItem}</h2>
      <h2>{product.category}</h2>
      <img src={product.urlImagen} alt={product.descriptionItem} />
      <p>{product.subdescription}</p>
      <p>Precio: $AGREGADO{product.price}</p>
    </div>
  );
}

export default ProductPage;