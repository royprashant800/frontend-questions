import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
            fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
            })
        }, [])

    return (
        <div>
            <h2>Product Details page</h2>
            {product ? (
                <div>
                    <img src={product.thumbnail} alt={product.title} />
                    <h3>{product.title}</h3>
                    <h3>{product.price}</h3>
                    <p>{product.description}</p>
                </div>

            ) : <p>Loading...</p>}
        </div>
    )
}

export default ProductDetails;