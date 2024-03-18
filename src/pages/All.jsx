import ItemContainer from "../components/ItemContainer";
import Titulo from "../components/Titulo.jsx";




const All = ({ message, itemCategories }) => {
  return (
    <>
      <div className="d-flex flex-column w-100">
        <Titulo message={message}></Titulo>
        <ItemContainer filtro="TODO" />
      </div>
    </>
  );
};

export default All;
