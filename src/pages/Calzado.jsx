import ItemContainer from "../components/ItemContainer"
import Titulo from "../components/Titulo";
import Categories from "../components/Categories";
const Calzado = ({message,itemCategories}) => {

    return (
        <>
            <div className="d-flex flex-row  justify-content-between container-md py-3">
                <Titulo message={message} />
                <Categories itemCategories={itemCategories}></Categories>

            </div>
            <ItemContainer filtro="SHOES" />
        </>

    )
}

export default Calzado;