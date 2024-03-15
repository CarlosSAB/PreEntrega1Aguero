import "../styles/ItemContainer.css";
import ItemCount from "../components/ItemCount.jsx";

// const DataItems = [
//   {
//     item_id: 1,
//     descriptionItem: "SET CONJUNTO ADIDAS",
//     subdescription: "T-SHIRT",
//     price: 150.99,
//     stockItem: 15,
//     urlImagen:
//       "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/214c5e22d3554a53b6625af8b4641a5d_9366/polo-adidas-basketball-001_.jpg",
//   },
//   {
//     item_id: 2,
//     descriptionItem: "SET CONJUNTO ADIDAS",
//     subdescription: "T-SHIRT",
//     price: 179.99,
//     stockItem: 5,
//     urlImagen:
//       "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Zapatillas_Samba_OG_Blanco_B75806_01_standard.jpg",
//   },
//   {
//     item_id: 3,
//     descriptionItem: "SET CONJUNTO ADIDAS",
//     subdescription: "T-SHIRT",
//     price: 275.0,
//     stockItem: 17,
//     urlImagen:
//       "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/92ffc42c863b4d3b85a04a517d00e765_9366/Zapatillas_Gazelle_Bold_Rosado_IE0420_01_standard.jpg",
//   },
// ];

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
