import React, { useState } from 'react'

const AddCategory = ({setCategories}) => {
    
const [inputValue, setInputValue] = useState('');
    
const hanleInputChange = (e) => {
    console.log (e.target.value);
    setInputValue(e.target.value);
}

const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
        setCategories( cats => [...cats, inputValue]);
        setInputValue('');
    }
}
    
    return (
        <form
            onSubmit = {handleSubmit}
        >
             
            <input 
                type="text"
                value= { inputValue }
                onChange={ hanleInputChange }
            />
            
        </form>
    )
}

export default AddCategory
