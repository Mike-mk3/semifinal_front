import { useState, useEffect } from "react";
import { getProducts } from "../../services/Ecommerce.service";
import { Link } from "react-router-dom";
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

    let addProductToCart = (product) => {
        console.log(product);

        let cart = window.localStorage.getItem('cart') ? JSON.parse(
            window.localStorage.getItem('cart')) : [];
        let existingProduct = cart.find(item => item._id === product._id);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        window.localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} Agregado al Carrito de Compras`);



    }

    return (
        <>
            <div className="container page">
                <h1>= PRODUCTOS =</h1>
                <div className="row">
                    {
                        products.map((product) => {
                            return (
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4" key={product._id}>
                                    <div className="card mb-3">

                                        <img
                                            src={product.image}
                                            className="img-fluid"
                                            alt="no hay imagen disponible"
                                            style={{ maxHeight: "17rem", minHeight: "17rem" }}
                                        />

                                        <div className="card-body" style={{ height: "15rem", overflow: "hidden" }}>
                                            <h2>{product.name}</h2>
                                            <h5>${product.price}</h5>
                                            <small>{product.sku}</small>
                                            <p className="card-text">{product.description}</p>
                                            <div className="d-grid gap-2 ">
                                                <button type="button" className="btn btn-primary btn-sm" onClick={() => addProductToCart(product)}>Agregar al carrito</button>
                                                <Link to={`/producto/${product._id}`} className="btn btn-warning btn-sm">Detalle</Link>
                                            </div>
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