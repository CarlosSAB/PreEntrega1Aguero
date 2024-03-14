
import './App.css'
import Navbar from './components/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemCount from './components/ItemCount.jsx';



function App() {

  return (
    <>
        <Navbar></Navbar>
        <ItemListContainer greeting="¡Hola!, Bienvenido a tu tienda virtual 🔥🚀"></ItemListContainer>
        <ItemCount 
        initial={0}
        stock={10}
        onAdd={(count)=> console.log('Cantidad agregada', count)}></ItemCount>

        
    </>
  )
}

export default App
