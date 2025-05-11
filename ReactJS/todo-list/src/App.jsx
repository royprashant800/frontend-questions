import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WorkTile from './WorkTile';

function App() {
  const [title, setTitle] = useState(null);
  const [workList, setWorkList] = useState([]);

  const handleInputChange = (e) => {
    setTitle((prev) => e.target.value);
  }

  const handleSave = () => {
    setWorkList((prev) => [...workList, title]);
    setTitle('');
  }

  return (
    <>
      {/* <h1>TO DO List</h1> */}
      <div className='App'>
        <input type='text' value={title} onChange={(e) => handleInputChange(e)} />
        <input type='submit' text='Submit' onClick={handleSave} />

        {workList.map((item) => {
          return (
            <WorkTile title={item} workList={workList} setWorkList={setWorkList} />
          )
        })}
      </div>
    </>
  )
}

export default App
