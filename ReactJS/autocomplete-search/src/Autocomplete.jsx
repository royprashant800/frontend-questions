import React from 'react'
import { useState } from 'react'
import './App.css';

const Autocomplete = () => {
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const possibleValues = ["Ram", "Ganesh", "Samsung", "Apple", "MI", "POCO", "RealMe", "Google", "One Plus", "Whirlpool", "LG", "Levis", "Spykar", "Invictus", "Mufti", "Adidas", "Nike", "Reebok", "Zydus"]

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        if(value.length > 0) {
            const filteredSuggestions = possibleValues.filter(suggestion => 
                suggestion.toLowerCase().includes(value.toLowerCase())
            )
            setSuggestions(filteredSuggestions.length > 0 ? filteredSuggestions : ["No Matches found"]); 
        } else {
            setSuggestions([]);
        }
    }   

    const handleSuggestionClick = (value) => {
        setInputValue(value);
        setSuggestions([]);
    }

    return (
    <div className='autocomplete-wrapper'>
        <input 
            type="text"
            value={inputValue} 
            onChange={handleInputChange} 
            aria-autocomplete='list'
            aria-controls='autocomplete-list'
        />
        {suggestions.length > 0 && (
            <ul id='autocomplete-list' className='suggestions-list' role='listbox'>
                {suggestions.map((suggestion, index) => (
                    <li key={index} onClick={() => handleSuggestionClick(suggestion)} role='option'>{suggestion}</li>
                ))  }
            </ul>
        )}

    </div>
    )
}

export default Autocomplete;