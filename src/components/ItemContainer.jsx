import "../styles/ItemContainer.css";
import ItemCount from "../components/ItemCount.jsx";


const ItemContainer = ({productos}) => {
  return (
    <>
      <div className="gridContainer gap-2  py-5 container-md">
        {productos
        .filter(item => item.category === "CALZADO")
        .map((item) => (
          <div className="cardContainer" key={item.item_id}>
            <div className="containerImg">
              <img  key={item.urlImagen} src={item.urlImagen} alt={item.descriptionItem} />
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
