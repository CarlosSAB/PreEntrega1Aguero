import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";

function Navbar() {
  return (
    <>
      <header>
        <nav className="d-flex flex-row align-items-center justify-content-between py-3 px-5 bg-dark text-light">
            <div>
                <p className="text-light fw-bold fst-italic fs-5">ONE<span className="text-primary">CHANGED</span></p>
            </div>
          <ItemListContainer  className='d-flex  gap-4 list-unstyled fw-bold'></ItemListContainer>
          <CartWidget></CartWidget>
        </nav>
      </header>
    </>
  );
}
export default Navbar;
