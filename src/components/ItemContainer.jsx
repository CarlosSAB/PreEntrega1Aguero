import "../styles/ItemContainer.css";
import ItemCount from "../components/ItemCount.jsx";

import { useState, useEffect } from 'react';




const ItemContainer = ({filtro}) => {

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
      <div className="gridContainer gap-2  pb-5 container-md">

        {

          productos

            .filter(item => item.category === filtro)
            .map((item) => (
              <div className="cardContainer" key={item.item_id}>
                <div className="containerImg">
                  <img key={item.urlImagen} src={item.urlImagen} alt={item.descriptionItem} />
                </div>
                <div className="containerDesc px-2">
                  <p className="descripcionItem text-secondary pt-3" key={item.descriptionItem}>
                    {item.descriptionItem}
                  </p>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p className="subdescription" key={item.subdescription}>{item.subdescription}</p>
                      <p className="price fw-semibold" key={item.price}>S/.{item.price}</p>
                    </div>

                    <div>
                      <ItemCount
                        initial={0}
                        stock={item.stockItem}
                        onAdd={(count) => console.log("Cantidad agregada", count)}
                      ></ItemCount>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default ItemContainer;
