import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux'
import { allCountries, unmountAllCountries, filterPopulation, getActivity, filterByActivity } from '../redux/actions';
import CountryCard from './CountryCard'
import Paginado from './nav/Paginado';
import './countries.css'


const Countries = () => {
    const query = new URLSearchParams(useLocation().search.slice(1))
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);
    const activity = useSelector(state => state.activitys);
    const name = query.get('name');
    const from = query.get('from');
    const [currentPage, setCurrentPage] = useState(1);
    const [orden, setOrden] = useState('')
    const [countryPerPage] = useState(9);
    const indexOfLastCountry = currentPage * countryPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countryPerPage;
    const currentCountry = countries?.slice(indexOfFirstCountry, indexOfLastCountry);

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        name ? dispatch(allCountries(name)) : dispatch(allCountries());
        return () => {
            dispatch(unmountAllCountries())
        }
    }, [dispatch]);

    useEffect(() => {
        dispatch(getActivity())
    }, [dispatch,name])

    function handleActivyChange(e) {
        dispatch(filterByActivity(e.target.value))
    };
   



    function handleFilterPopulation(e) {
        e.preventDefault()
        dispatch(filterPopulation(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    };


    const countryComponent = () => (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
                <div>
                    <label htmlFor=''>Population</label>
                    <select onChange={e => handleFilterPopulation(e)}>
                        <option value=''>Population</option>
                        <option value='asc'>ASC</option>
                        <option value='dsc'>DSC</option>
                    </select>
                    <select id="select" onChange={(e) => handleActivyChange(e)}>
                        <option value='All '>Filter-Activity</option>
                        {activity?activity.map((elem) => <option key={elem.id} value={elem.name}>{elem.name}</option>):null}
                    </select>
                </div>
                <Paginado
                    countryPerPage={countryPerPage}
                    countries={countries?.length}
                    paginado={paginado}
                />
                <div className='container'>
                    {
                        currentCountry?.map((country) => <CountryCard key={country.id} country={country} />)
                    }
                </div>
            </div>
        </div>
    );
    return countries.length ? countryComponent() : <div>Cargando...</div>
}

export default Countries;