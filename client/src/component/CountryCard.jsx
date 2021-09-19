import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard =({country}) => {
    return(
        <div>
           <Link to={`/main/${country.id}`}><h4>{country.name}</h4></Link>
            <h4>{country.continent}</h4>
            <img src={country.flag} alt={country.name} style={{width:'250px', height:'200px', borderRadius:'5px'}}/>
        </div>
    )
};

export default CountryCard;