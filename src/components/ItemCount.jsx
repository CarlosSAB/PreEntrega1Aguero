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
      <div className="container text-center p-5">
        <div className="d-flex align-items-center justify-content-center">
          <button className="btn btn-primary" onClick={increment}>+</button>
          <p className="px-5 fs-2 fw-bold">{count}</p>
          <button className="btn btn-primary" onClick={decrement}>-</button>
        </div>
        <button className="btn btn-primary my-3"onClick={()=>onAdd(count)} disabled={!stock}>Agregar al carrito</button>
      </div>
    </>
  );
};

export default ItemCount;
