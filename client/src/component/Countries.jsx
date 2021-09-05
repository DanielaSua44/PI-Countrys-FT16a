import react, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux'
import { allCountries, unmountAllCountries } from '../redux/actons';
import CountryCard from './CountryCard'
import Paginado from './nav/Paginado';

const Countries = () => {
    const query = new URLSearchParams(useLocation().search.slice(1));
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries);
    const name = query.get('name');
    const from = parseInt(query.get('from'))

    useEffect(() => {
        name ? dispatch(allCountries(name)) : dispatch(allCountries());
        return () => {
            dispatch(unmountAllCountries())
        }
    }, [dispatch, name]);

    return (
        <div style={{display:'flex',justifyContent:'space-around'}}>
            {
                countries &&(
                    <div>
                        <Paginado countries={countries}/>
                        {
                             countries.map(country => <CountryCard key={country.id} country={country} />).slice(from, from + 9)
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Countries;