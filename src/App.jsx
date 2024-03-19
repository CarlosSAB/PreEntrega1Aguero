import "./App.css";
import Tshirt from "./pages/Tshirt.jsx";
import Calzado from "./pages/Calzado.jsx";
import All from "./pages/All.jsx";
import { Routes, Route } from "react-router-dom";
import NavbarUI from "./components/NavbarUI.jsx";
import ItemCount from "./components/ItemCount.jsx";
import FilterCategories from "./components/FilterCategories.jsx";

const itemCategories = [
  {
    name: "All",
    path: "/All",
    category: "ALL",
    title: "EXPLORE",
    subtitle: "Our Collection",
  },
  {
    name: "Calzado",
    path: "/calzado",
    category: "SHOES",
    title: "SHOES FOR MEN ",
    subtitle: "S2TRUCK Collection",
  },
  {
    name: "T-Shirt",
    path: "/tshirt",
    category: "TSHIRT",
    title: " T-SHIRT FOR MEN",
    subtitle: "T-Shirt in tendence",
  },
];

function App() {
  return (
    <>
      <NavbarUI></NavbarUI>
      <div className="d-flex flex-row  gap-4 pb-5 px-5">
        <FilterCategories itemCategories={itemCategories}></FilterCategories>
        
        <Routes>
          <Route path="/" element={<All  message={itemCategories[0]} itemCategories={itemCategories}/>}/>
          <Route path="/All" element={<All message={itemCategories[0]} itemCategories={itemCategories}/>}/>
          <Route path="/calzado" element={<Calzado message={itemCategories[1]} itemCategories={itemCategories}></Calzado>} /> 
          <Route path="/tshirt" element={<Tshirt message={itemCategories[2]} itemCategories={itemCategories}></Tshirt>}  /> 
        </Routes>
      </div>
    </>
  );
}

export default App;
