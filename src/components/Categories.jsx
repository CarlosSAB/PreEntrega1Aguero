import "../styles/Categories.css";
import { NavLink } from "react-router-dom";
const Categories = ({itemCategories}) => {



  return (
    <>

      <div className="container pt-4 pb-1 d-flex flex-row justify-content-between align-items-center">
        <div>
          <h5 className="fw-light">EXPLORE</h5>
          <h5 className="fw-bold pb-2">Our Collection</h5>
        </div>
        <div className="d-flex flex-row gap-4 fw-bold">
          {
            itemCategories.map(item => {
              return (
                
                <NavLink className="categories"
                  key={item.name}
                  to={item.path} value={item.name}>{item.name}</NavLink>
              )
            })
          }
        </div>

      </div>

    </>
  );
};

export default Categories;
