import Tabs from './Tabs';
import './App.css';
import './index.css';
import { tabsData } from './data';

function App() {

  return (
    <>
      <h1>Tabs</h1>
      <Tabs currentIndex={0} tabsData={tabsData} />
    </>
  )
}

export default App
