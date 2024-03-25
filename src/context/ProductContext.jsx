import { createContext, useState, useEffect, useContext } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {

  const [products,setProducts] = useState([])
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
        setProducts(data);
      } catch (error) {
        setError("Se ha producido un error: " + error.message);
        console.error(error); // Imprimir el error detallado en la consola
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <ProductContext.Provider value={{ products }}>
        {children}
      </ProductContext.Provider>
    </>
  );
};

const useProductContext = () => useContext(ProductContext);

export { ProductContext, ProductProvider, useProductContext };
