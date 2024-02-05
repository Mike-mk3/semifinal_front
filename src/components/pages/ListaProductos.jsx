import { useState, useEffect } from "react";
import { getProducts } from "../../services/Ecommerce.service";
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';

function ListaPoductos() {

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

        let cart = window.localStorage.getItem('cart') ? JSON.parse( window.localStorage.getItem('cart')) : [];

        let existingProduct = cart.find(item => item._id === product._id);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({...product, quantity: 1});
        }

        window.localStorage.setItem('cart', JSON.stringify(cart));
        // alert(`${product.name} agregado al carrito`);
        toast.success(`${product.name} agregado al carrito`);

    }


    return (
        <>
            <div className="container page">
                <h1>Productos</h1>
                <div className="row">
                    {
                        products.map((product) => {
                            return (
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4" key={product._id}>
                                    <div className="card mb-3">
                                        <img
                                            src={product.image} className="img-fluid"
                                            alt="no_image"
                                            style={{ maxHeight: "20rem", minHeight: "20rem" }}
                                        />
                                        <div className="card-body" style={{ height: "18rem", overflow: "hidden" }}>
                                            <h3>${product.price}</h3>
                                            <h4 className="card-title">{product.name}</h4>
                                            <small>{product.sku}</small>
                                            <p className="card-text">{product.description}</p>
                                            <div className="d-grid gap-2 ">
                                                <button type="button" className="btn btn-primary btn-sm" onClick={() => addProductToCart(product)}>Agregar al carrito</button>
                                                <Link
                                                    to={`/producto/${product._id}`} className="btn btn-warning btn-sm">
                                                    Detalle
                                                </Link>
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

export default ListaPoductos;