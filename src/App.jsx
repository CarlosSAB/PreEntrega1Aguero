import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavbarUI from "./components/NavbarUI.jsx";
import FilterCategories from "./components/FilterCategories.jsx";
import Products from "./pages/Products.jsx";
import Home from "./pages/Home.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import Calzado from "./pages/Calzado.jsx";
import Contact from "./pages/Contact.jsx";

import { ProductProvider } from "./context/ProductContext.jsx";
import Tshirt from "./pages/Tshirt.jsx";
const itemCategories = [
  {
    name: "All",
    path: "/products",
    category: "ALL",
    title: "EXPLORE",
    subtitle: "Our Collection",
  },
  {
    name: "Calzado",
    path: "/products/SHOES",
    category: "SHOES",
    title: "SHOES FOR MEN ",
    subtitle: "S2TRUCK Collection",
  },
  {
    name: "T-Shirt",
    path: "/products/TSHIRT",
    category: "TSHIRT",
    title: " T-SHIRT FOR MEN",
    subtitle: "T-Shirt in tendence",
  },
];

function App() {
  return (
    <>
      <ProductProvider>
        <NavbarUI></NavbarUI>

        <div className="d-flex flex-row  gap-4  px-5 contenedor">
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route
              path="/products"
              element={
                <>
                  <FilterCategories
                    itemCategories={itemCategories}
                  ></FilterCategories>
                  <Products></Products>
                </>
              }
            />
            <Route
              path="/products/:category/:item_id"
              element={<ProductPage />}
            />
            <Route
              path="/products/SHOES"
              element={
                <>
                  <FilterCategories
                    itemCategories={itemCategories}
                  ></FilterCategories>
                  <Calzado />
                </>
              }
            />
            <Route
              path="/products/TSHIRT"
              element={
                <>
                  <FilterCategories
                    itemCategories={itemCategories}
                  ></FilterCategories>
                  <Tshirt />
                </>
              }
            />
            <Route path="/contact" element={<Contact></Contact>}></Route>
          </Routes>
        </div>
      </ProductProvider>
    </>
  );
}

export default App;
