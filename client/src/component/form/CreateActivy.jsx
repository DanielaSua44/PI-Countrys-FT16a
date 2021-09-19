import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allCountries, createActy } from '../../redux/actions';
import { Link, useHistory } from 'react-router-dom';
import './index.css'



const CreateActivy = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const countries = useSelector(state => state.countries);
    const [errors, setErrors] = useState('');
    const [values, setValues] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        country: '',
    });

    function validate(input) {
        let errors = {};
        if (!values.name) {
            errors.name = 'Se requiere un Nombre';
        }
        else if(!values.difficulty){
            errors.difficulty= 'Se requiere una selecion'
        }
        else if(!values.duration){
            errors.duration = 'Debe eleguir un valor positivo'
        }
        else if(!values.season){
            errors.season = 'Debe eleguir una season'
        }
        else if(!values.country){
            errors.country='Debe eleguir uno o mas paises'
        }
    
        return errors;
    };


    const handleOnChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...values,
            [e.target.name]: e.target.value
        }));
    }

    useEffect(() => {
        dispatch(allCountries())
    }, [dispatch])

    const handleSumit = e => {
        e.preventDefault();
        console.log("values:", values)
        setErrors(validate({
            ...values,
            [e.target.name]: e.target.value
        }))
        dispatch(createActy(values))
        alert("country create")
        setValues({
            name: '',
            difficulty: '',
            duration: '',
            season: '',
            countries: '',
        });
        history.push('/main')
    };

    function handleSelect(e) {
        setValues({
            ...values,
            country: [
                ...values.country,
                e.target.value
            ]
        });
        console.log()
    };

    function handleCheck(e) {
        if (e.target.checked) {
            setValues({
                ...values,
                season: e.target.value
            });
        };
    };
    return (
        <div className='father'>
            <Link to='/main'>
                <button className='submit'>Home</button>
            </Link>
            <h1 className='title'>New activy</h1>
            <div className='container'>
                <form onSubmit={handleSumit}>
                    <label className='formulario_titulo'>Nombre:</label>
                    <div className='formulario'>
                        <input  className={`${errors.name && 'requerid'}`} className='formulario_input' name='name' onChange={handleOnChange} type='text' value={values.name} />
                        {errors.name && (
                            <p className='requerid'>{errors.name}</p>
                        )}
                    </div>
                    <label className='formulario_titulo' htmlFor=''>difficulty</label>
                    <select  className={`${errors.difficulty && 'requerid'}`} className='formulario_input' name='difficulty' onChange={handleOnChange} type='number' value={values.difficulty}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    {errors.name && (
                            <p className='requerid'>{errors.difficulty}</p>
                        )}
                    <label className='formulario_titulo' htmlFor=''>duration</label>
                    <input  className={`${errors.duration && 'requerid'}`} className='formulario_input' name='duration' onChange={handleOnChange} type='number' value={values.duration} />
                    <label className='formulario_titulo'>Temporada</label>
                    <label><input className='check' type='checkbox' name='Summer' value='Summer' onChange={handleCheck} />Summer</label>
                    <label><input className='check' type='checkbox' name='Winter' value='Winter' onChange={handleCheck} />Winter</label>
                    <label><input className='check' type='checkbox' name='Fall' value='Fall' onChange={handleCheck} />Fall</label>
                    <label><input className='check' type='checkbox' name='Spring' value='Spring' onChange={handleCheck} />Spring</label>
                    <label  className={`${errors.country && 'requerid'}`} className='formulario_titulo' htmlFor=''>countries</label>
                    <select name="id " value={values.country} onChange={e => handleSelect(e)}>
                        {
                            countries && countries.map(state => (
                                <option value={state.id}>{state.name}{state.id}</option>
                            ))
                        }
                    </select>
                    <button className='submit' type='submit'>Crear Actividad</button>
                </form>
            </div>
        </div>
    )
}

export default CreateActivy;