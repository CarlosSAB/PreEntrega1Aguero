import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import '../styles/Categories.css'
import All from "../pages/All";

function Navbar({ itemCategories }) {
  return (
    <>
      <header>
        <nav className="d-flex flex-row align-items-center justify-content-between py-2 px-5 bg-dark text-light">
          <div>
            <NavLink 
            className="text-light fw-bold fst-italic fs-5" 
            style={{textDecoration: "none", cursor:"pointer"}}
            to={"All"}>
              ONE<span className="text-primary">CHANGED</span>
            </NavLink>
          </div>
          <div className="itemListContainer d-none d-md-block">
            <ul id="serviceContainer" className="d-flex align-items-center justify-content-center gap-4 fw-bold list-unstyled ">
              {itemCategories.map(item => {
                return (
                  <>
                      <NavLink className="navbarCategories" key={item.name} to={item.path} >{item.name}</NavLink>

                  </>
                )
              })

              }


            </ul>
          </div>

          <CartWidget></CartWidget>
        </nav>
      </header>
    </>
  );
}
export default Navbar;
