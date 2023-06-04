import './HelloInput.css';
import { useState } from 'react';

const HelloInput = ({ setFirstName }) => {
    const handleChange = (e) => {setFirstName(e.target.value)};

    return <input name="FirstName" onChange={handleChange}/>
}

export default HelloInput;
