import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const SearchBar = () => {
    const history=useHistory();
    const [name,setName] =useState('');

    const handleOnClick=() => {
        setName('');
        history.push(`/main?name=${name}`);
    }
    return(
        <div>
            <input onChange={({target:{value}}) => setName(value)} value={name} type='text' placeholder="Search..."/>
            <button type='submit' onClick={(e) => handleOnClick(e)}>Search</button>
        </div>
    )
};

export default SearchBar;