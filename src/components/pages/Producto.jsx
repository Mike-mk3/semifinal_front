import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/Ecommerce.service";

function Producto() {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        getProduct(id)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <div className="container page">
            <div className="col-12">
                <div className="card mb-4">
                    <img src={product.image} className="card-img-top" alt='test' />

                    <div className="card-body">
                        <h3>${product.price}</h3>
                        <h4 className='card-title'>{product.name}</h4>
                        <p className="card-text">{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Producto;