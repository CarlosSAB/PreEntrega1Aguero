
const Titulo = ({message}) => {
    return (

        <>

            <div className="container">
                <h5 className="fw-light">{message.subtitle}</h5>
                <h5 className="fw-bold pb-2">{message.title}</h5>
            </div>
        </>
    );
}

export default Titulo;