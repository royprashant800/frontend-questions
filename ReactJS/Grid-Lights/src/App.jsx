import { useState } from 'react';
import './App.css';

function Cell({ filled, onClick, isDisabled, label }) {
  return <button 
  type='button'
  aria-label={label}
  disabled={isDisabled}
  onClick={onClick}
  className={filled ? "cell cell-activated" : "cell"}
  />
}

function App() {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ];

  const deactivateCells = () => {
    setIsDeactivating(true);
    const timer = setInterval(() => {
      setOrder((origOrder) => {
        const newOrder = origOrder.slice();

        newOrder.pop();
        if(newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }
        return newOrder;
      })
    }, 500)
  }

  const activateCell = (index) => {
    const newOrder = [...order, index];
    setOrder(newOrder);

    if(newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivateCells();
    }
  }

  return (
    <div className='wrapper'>
      <div className='grid' style={{ gridTemplateColumns:`repeat(${config[0].length}, 1fr)` }}>
        {config.flat(1).map((value, index) => {
          return value ? <Cell 
            key={index}
            label={`Cell ${index}`}
            filled={order.includes(index)}
            onClick={() => activateCell(index)}
            isDisabled={order.includes(index) || isDeactivating}
          /> : <span />
        })}
      </div>
    </div>
  )
}

export default App;
