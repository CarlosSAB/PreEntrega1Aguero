import "./App.css";
import Navbar from "./components/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ProductosContainer from "./components/ProductosContainer.jsx";
import Categories from "./components/Categories.jsx";
import { AppBar } from "@mui/material";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <AppBar></AppBar>
      <ItemListContainer greeting="¡Hola!, Bienvenido a tu tienda virtual 🔥🚀"></ItemListContainer>
      <Categories></Categories>
      <ProductosContainer></ProductosContainer>
    </>
  );
}

export default App;
