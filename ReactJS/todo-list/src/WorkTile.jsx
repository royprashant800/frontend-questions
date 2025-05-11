import React from 'react';
import { useState } from 'react';
import './worktile.css';

const WorkTile = ({ title, workList, setWorkList }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);

    const handleChange = (e) => {
        setNewTitle(e.target.value);
    }
    const handleSave = () => {
        let workListUpdated = workList.map((item) => item === title ? newTitle : item);
        setWorkList(workListUpdated);
        setIsEditing(false);
    }
    const handleCancel = () => {
        setNewTitle(title);
        setIsEditing(false);
    }
    const handleEdit = () => {
        setIsEditing(true);
    }
    const handleDelete = (clickedTitle) => {
        let workListFiltered = workList.filter((item) => item !== clickedTitle);
        setWorkList(workListFiltered);
    }
 
    return (
        <div className='tile'>
            {isEditing ? (
                <>
                    <input type="text" value={newTitle} onChange={handleChange} className='tileInput' />
                    <button onClick={handleSave} className='tileButton saveButton'>Save</button>
                    <button onClick={handleCancel} className='tileButton cancelButton'>Cancel</button>
                </>
            ) : (
                <>
                    <p className='tileTitle'>{title}</p>
                    <button onClick={handleEdit} className='tileButton editButton'>Edit</button>
                    <button onClick={() => handleDelete(title)} className='tileButton deleteButton'>Delete</button>
                </>
            )}
        </div>
    )
}

export default WorkTile;