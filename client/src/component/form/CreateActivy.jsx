import react, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { allCountries,create } from '../../redux/actons';

const CreateActivy =() => {
    const dispatch= useDispatch()
    const countries =useSelector(state => state.countries)
    const [values,setValues] = useState({
        name:'',
        difficulty:'',
        duration:'',
        season:'',
        countries:'',
    });

    const handleOnChange =({target:{name,value}}) => setValues({
        ...values,
        [name]:value,
    });

    useEffect(() => {
        dispatch(allCountries())
    },[dispatch])

    const handleOnSumit = e => {
        e.preventDefault();
        dispatch(create())
        setValues({
            name:'',
            difficulty:'',
            duration:'',
            season:'',
            countries:'',
        })
    };

    function handleSelect(e) {
        setValues({
            ...values,
            countries: [
                ...values.countries,
                e.target.value
            ]
        });
    };

    function handleCheck(e) {
        if(e.target.checked) {
            setValues({
                ...values,
                status: e.target.value
            });
        };
    };
    return(
        <form onSubmit={handleOnSumit}>
            <label>Nombre:</label>
            <input name='name' onChange={handleOnChange} type='text' placeholder='Pone el nombre' value={values.name}/>
            <label htmlFor=''>difficulty</label>
            <input name='difficulty' onChange={handleOnChange} type='number'value={values.difficulty}/>
            <label htmlFor=''>duration</label>
            <input name='duration' onChange={handleOnChange} type='number'value={values.duration}/>
            <label>Temporada</label>
            <label><input type='checkbox' name='Summer' value='Summer' onChange={handleCheck} />Summer</label>
            <label><input type='checkbox' name='Winter' value='Winter' onChange={handleCheck} />Winter</label>
            <label><input type='checkbox' name='Fall' value='Fall' onChange={handleCheck} />Fall</label>
            <label><input type='checkbox' name='Spring' value='Spring' onChange={handleCheck} />Spring</label>
            <label htmlFor=''>countries</label>
            <input onChange={handleOnChange} type='text'/>
                <select name='' onChange={e => handleSelect(e)}>
                    {
                        countries && countries.map(i => (
                            <option value={JSON.stringify(i.id)}>{i.name}</option>
                        ))
                    }
                    <ul>
                        <li>{values.countries.map(i => i + ", ")}</li>
                    </ul>
                </select>
                <button type='submit'>Crear Actividad</button>
        </form>
    )
}

export default CreateActivy;