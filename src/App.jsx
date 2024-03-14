
import './App.css'
import Navbar from './components/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemCount from './components/ItemCount.jsx';
import ItemContainer from './components/ItemContainer.jsx';
import Peticiones from './components/Peticiones.jsx';



function App() {

  return (
    <>
        <Navbar></Navbar>
        <ItemListContainer greeting="¡Hola!, Bienvenido a tu tienda virtual 🔥🚀"></ItemListContainer>
      <ItemContainer></ItemContainer>
      <Peticiones></Peticiones>
  

    </>
  )
}

export default App
