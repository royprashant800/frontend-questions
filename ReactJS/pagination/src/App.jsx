import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchData = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`);
    const data = await res.json();
    if(data && data.products ) {
      setProducts(data.products);
      setTotalPages(Math.floor(data.total/10));
    }
  }

  const selectPageHandler = (selectedPage) => {
    console.log(products.length);
    
    if(selectedPage >= 1 && selectedPage <= totalPages && selectedPage !== page) {
      setPage(selectedPage);
    }
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      {
        products.length > 0 && <div>
          {
            products.map((prod) => {
              return (
              <div key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
              </div>)
            })
          }
        </div>
      }
      {products.length > 0 && (
        <div className='pagination'>
          <span className={page > 1 ? "" : "page_disabled"} onClick={() => selectPageHandler(page - 1)}>◀️</span>
          {[...Array(totalPages)].map((_, i) => {
              return (
              <span 
                className={page === i + 1 ? "selected_page" : ""}
                key={i} 
                onClick={() => selectPageHandler(i + 1)}
              >
                {i + 1}
              </span>
              );
          })}
          <span className={page < totalPages ? "" : "page_disabled"} onClick={() => selectPageHandler(page + 1)}>▶️</span>
        </div>
      )}
    </>
  )
}

export default App
