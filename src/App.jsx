import "./App.css";

import ItemListContainer from "./components/ItemListContainer.jsx";
import Tshirt from "./pages/Tshirt.jsx"
import Calzado from "./pages/Calzado.jsx"
import All from "./pages/All.jsx"
import { Routes, Route } from "react-router-dom";
import NavbarUI from "./components/NavbarUI.jsx";
const itemCategories = [

  {
    name: "All",
    path: "/All",
    category: "All",
    title: "EXPLORE",
    subtitle: "Our Collection"
  },
  {
    name: "Calzado",
    path: "/calzado",
    category: "SHOES",
    title: "SHOES FOR MEN ",
    subtitle: "S2TRUCK Collection"
  }
  , {
    name: "T-Shirt",
    path: "/tshirt",
    category: "TSHIRT",
    title: " SantST Collection",
    subtitle: "T-Shirt in tendence"
  }
]




function App() {


  return (
    <>
      <NavbarUI></NavbarUI>
      {/* <Navbar itemCategories={itemCategories}></Navbar> */}
      <ItemListContainer greeting="¡Hola!, Bienvenido a tu tienda virtual 🔥🚀"></ItemListContainer>
      <Routes>
        <Route path="/" element={<All message={itemCategories[0]} itemCategories={itemCategories}/>} />
        <Route path="/All" element={<All message={itemCategories[0]} itemCategories={itemCategories}/>} />
        <Route path="/calzado" element={<Calzado message={itemCategories[1]} itemCategories={itemCategories}></Calzado>}></Route>
        <Route path="/tshirt" element={<Tshirt message={itemCategories[2]} itemCategories={itemCategories}></Tshirt>}></Route>
      </Routes>

      <div style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>

      </div>
    </>
  );
}

export default App;
