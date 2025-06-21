import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

const Home = () => {
    const[trendingProducts, setTrendingProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products').then((res) => res.json())
        .then((res) => {
        const sliceTrending = res.products.slice(0 ,6);
        setTrendingProducts(sliceTrending)
        })
    }, [])

    return (
        <div>
            <h2>Home page</h2>
            <span>Trending Products</span>

            <div className="product-grid">
                {trendingProducts.map((product) => {
                    return (
                        <div className="product-card" key={product.id}>
                            <Link to={`/products/${product.id}`} >
                                <img src={product.thumbnail} alt="" />
                                <h3>{product.title}</h3>
                            </Link>
                        </div>
                    )
                })}
            </div>

            <div>
                <Link to='/products'>
                    <button>View All Products</button>
                </Link>
            </div>
        </div>

        
    )
}

export default Home;