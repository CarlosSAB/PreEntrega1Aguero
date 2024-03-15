import "./App.css";
import Navbar from "./components/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ProductosContainer from "./components/ProductosContainer.jsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <ItemListContainer greeting="¡Hola!, Bienvenido a tu tienda virtual 🔥🚀"></ItemListContainer>
      <ProductosContainer></ProductosContainer>
    </>
  );
}

export default App;
