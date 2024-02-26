import CartWidget from "./CartWidget";


function Navbar() {
  return (
    <>
      <header>
        <nav className="d-flex flex-row align-items-center justify-content-between py-2 px-5 bg-dark text-light">
          <div>
            <p className="text-light fw-bold fst-italic fs-5">
              ONE<span className="text-primary">CHANGED</span>
            </p>
          </div>
          <div className="itemListContainer d-none d-md-block">
            <ul id="serviceContainer" className="d-flex align-items-center justify-content-center gap-4 fw-bold list-unstyled ">
              <li>Inicio</li>
              <li>Servicios</li>
              <li>Shop</li>
              <li>Pedidos</li>
              <li>Delivery</li>
            </ul>
          </div>

          <CartWidget></CartWidget>
        </nav>
      </header>
    </>
  );
}
export default Navbar;
