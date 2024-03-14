import { useState } from "react";
import "../styles/ItemCount.css";

const ItemCount = ({initial,stock,onAdd}) => {
  const [count, setCount] = useState(0);

  const increment = ()=>{
    (stock > count) ? setCount(count+1) : setCount(initial)
  }

  const decrement = ()=>{
    (count>initial) ? setCount(count-1) : setCount(stock)
  }

  return (
    <>
      <div className="CajaContador py-3">
        <p style={{fontSize: ".7rem"}} className="pb-2">Quantity: {stock}</p>
        <div className="d-flex align-items-center justify-content-center">
          <button className="botones" onClick={increment}>+</button>
          <p className="px-2" style={{width:"33.25px",textAlign:"center"}}>{count}</p>
          <button className="botones" onClick={decrement}>-</button>
        </div>
        {/* <button className="btn  my-3"onClick={()=>onAdd(count)} disabled={!stock}>Agregar al carrito</button> */}
      </div>
    </>
  );
};

export default ItemCount;
