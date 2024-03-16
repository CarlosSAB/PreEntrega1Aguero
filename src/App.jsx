import "./App.css";
import Navbar from "./components/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import Categories from "./components/Categories.jsx";
import Tshirt from "./pages/Tshirt.jsx"
import Calzado from "./pages/Calzado.jsx"
import { AppBar } from "@mui/material";
import { Routes, Route } from "react-router-dom";


const itemCategories = [{
  name: "Calzado",
  path: "/calzado",
  category: "CALZADO"
}
  , {
  name: "T-Shirt",
  path: "/tshirt",
  category: "TSHIRT"
}]




function App() {


  return (
    <>
      <Navbar></Navbar>
      <AppBar></AppBar>
      <ItemListContainer greeting="¡Hola!, Bienvenido a tu tienda virtual 🔥🚀"></ItemListContainer>
      <Categories itemCategories={itemCategories}></Categories>
      <Routes>
        <Route path="/" element={<Tshirt></Tshirt>}></Route>
        <Route path="/tshirt" element={<Tshirt></Tshirt>}></Route>
        <Route path="/calzado" element={<Calzado></Calzado>}></Route>
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
