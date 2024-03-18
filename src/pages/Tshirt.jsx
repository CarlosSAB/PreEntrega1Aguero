import ItemContainer from "../components/ItemContainer";
import Titulo from "../components/Titulo.jsx";




const Tshirt = ({ message, itemCategories }) => {
  return (
    <>
      <div className="d-flex flex-column w-100">
        <Titulo message={message}></Titulo>
        <ItemContainer filtro="TSHIRT" />
      </div>
    </>
  );
};

export default Tshirt;
