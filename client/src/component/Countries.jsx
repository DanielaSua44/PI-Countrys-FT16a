import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { allCountries, unmountAllCountries } from '../redux/actions';
import CountryCard from './CountryCard'
import Paginado from './nav/Paginado';

const Countries = () => {
    const query = new URLSearchParams(useLocation().search.slice(1));
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries);
    const name = query.get('name');
    const from = query.get('from');

    useEffect(() => {
        name ? dispatch(allCountries(name)) : dispatch(allCountries());
        return () => {
            dispatch(unmountAllCountries())
        }
    }, [dispatch, name]);

    const countryComponent= () =>(
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
    );
    return countries.length ? countryComponent() : <div>Cargando...</div>
}

export default Countries;