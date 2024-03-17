import ItemContainer from "../components/ItemContainer";
import Titulo from '../components/Titulo.jsx'
import Categories from "../components/Categories.jsx";
const All = ({ message, itemCategories }) => {
    return (
        <>
            {/* Acceso a la prop itemCategories */}
            <div className="d-flex flex-row  justify-content-between container-md py-3">
                <Titulo message={message} />
                <Categories itemCategories={itemCategories}></Categories>

            </div>
            <ItemContainer filtro="TODO" />

            {/* Otro componente o código aquí */}
        </>
    );
}

export default All;
