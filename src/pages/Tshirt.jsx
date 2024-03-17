import ItemContainer from "../components/ItemContainer"
import Titulo from "../components/Titulo";
import Categories from "../components/Categories";
const Tshirt = ({message, itemCategories}) => {

    return (
        <>
            <div className="d-flex flex-row  justify-content-center container py-3">
                <Titulo message={message} />
                <Categories itemCategories={itemCategories}></Categories>

            </div>
            <ItemContainer filtro="TSHIRT" />
        </>

    )
}

export default Tshirt;