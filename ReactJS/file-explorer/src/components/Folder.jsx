import { useState } from "react"

const Folder = ({ handleInsertNode = () => {}, explorer }) => {
  const [expand,setExpand] = useState(false); 
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false
  })

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true)
    setShowInput({
      visible: true,
      isFolder
    })
  }

  const onAddFolder = (e) => {
    if(e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder)
      setShowInput({ ...showInput, visible: false })
    }
  }
  
  if(explorer.isFolder) {  
    return (
      <div>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📁{explorer.name}</span>  
          <div>
                <button onClick={(e) => handleNewFolder(e, true)}>Folder</button>
                <button onClick={(e) => handleNewFolder(e, false)}>File</button>
          </div>
        </div>  
        <div style={{ display: expand ? "block" : "none", paddingLeft: '25px' }}>
          {showInput.visible && (
            <div className="">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input 
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                autoFocus
                onKeyDown={onAddFolder}
                className="inputContainer__input" 
                type="text"
              />
            </div>
          )}

          {explorer.items.map((exp) => {
            return (
              <Folder handleInsertNode={handleInsertNode} explorer={exp} key={exp.id} />
            )
            
          })}
        </div>
      </div>
    )
  } else {
    return <span className="file">📄{explorer.name}</span>
  }
}

export default Folder;