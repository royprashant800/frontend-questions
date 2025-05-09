import { useEffect, useRef } from 'react';
import './App.css'

function App() {

  const pollingRef = useRef(null);
  useEffect(() => {
    const startPolling = (stoppingState) => {
      pollingRef.current = setInterval(() => {
        pollingFunc(stoppingState);
      }, 5000);
    }
    startPolling(false);

    return () => {
      clearInterval(pollingRef.current);  
    } 
  }, [])

  const pollingFunc = async (stoppingState: boolean) => {
    const data = fetchServerData('GET');

    switch(data?.status) {
      case "stopped":
        setStatus: ({ stopped: true });
        if(stoppingState) {
          toast.success("server stopped")
        }
        setStatus({ ...defaultState })
        break;

      case "running":
        if(data?.url) {
          setData(data);
          setStatus({ running: true });
          toast.success("server is running");
        }
        break;

      case "creating":
        setStatus({ creating : true })
        break;

      case "stopping":
        setStatus({ stopping : true })
        break;

      default:
        handleError(data);
        toast.error(`An error occured, ${data.error_message}`);
        break;
    }
  }

  return (
    <>
      <h1>Vite + React</h1>
    </>
  )
}

export default App
