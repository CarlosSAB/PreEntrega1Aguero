import "../styles/Categories.css";

const Categories = () => {
  return (
    <>
      <div className="container pt-4 pb-1 d-flex flex-row justify-content-between align-items-center">
        <div>
          <h5 className="fw-light">EXPLORE</h5>
          <h5 className="fw-bold pb-2">Our Collection</h5>
        </div>
        <div className="d-flex flex-row gap-4 fw-bold">
            <p className="categories">Calzado</p>
            <p className="categories">T-shirt</p>
            <p className="categories">Poleras</p>
            <p className="categories">Accesorios</p>
        </div>
      </div>
    </>
  );
};

export default Categories;
