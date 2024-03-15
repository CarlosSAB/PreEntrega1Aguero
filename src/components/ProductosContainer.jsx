import { useEffect, useState } from "react";
import ItemContainer from "../components/ItemContainer.jsx";
const ProductosContainer = () => {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "http://localhost:3000/products";
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error al cargar los datos: " + response.statusText);
        }
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        setError("Se ha producido un error: " + error.message);
        console.error(error); // Imprimir el error detallado en la consola
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"}}>
        <ItemContainer productos={productos}></ItemContainer>
      </div>
    </>
  );
};

export default ProductosContainer;
