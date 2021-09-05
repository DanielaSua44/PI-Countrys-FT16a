import react from 'react';
import { Link } from 'react-router-dom';

const CountryCard =({country}) => {
    return(
        <div>
            <Link to={`/main/detail/:${country.id}`}><h4>{country.name}</h4></Link>
            <h4>{country.continent}</h4>
            <img src={country.flag} alt={country.name} style={{width:'120px', height:'150px', borderRadius:'5px'}}/>
        </div>
    )
};

export default CountryCard;