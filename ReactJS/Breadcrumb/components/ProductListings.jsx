import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

const ProductListings = () => {
    const[products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((data) => {
            setProducts(data.products);
            // console.log(res)
        })
    }, [])

    return (
        <div>
            <h2>Product Listigs page</h2>
            
            <div className="product-grid">
                {products?.map((product) => {
                    return (
                        <div className="product-card" key={product.id}>
                            <Link to={`/products/${product.id}`} >
                                <img src={product.thumbnail} alt="" />
                                <h3>{product.title}</h3>
                                <h3>${product.price}</h3>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default ProductListings;