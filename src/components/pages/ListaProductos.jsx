import { useState, useEffect } from "react";
import { getProducts } from "../../services/Ecommerce.service";

function ListaProductos() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then(response => {
                console.log(response.data.data);
                setProducts(response.data.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);



    return (
        <>
            <div className="container page">
                <h2>= PRODUCTOS =</h2>
                <div className="row">
                    {
                        products.map((product) => {
                            return (
                                <div className="col-md-12" key={product._id}>
                                    <div className="card">
                                        <img src="..." className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );

}

export default ListaProductos;