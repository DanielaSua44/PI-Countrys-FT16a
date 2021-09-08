import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import {orderFilter} from '../../redux/actions';
import {useLocation, useHistory} from 'react-router-dom';

const Filter = () => {
    const query = new URLSearchParams(useLocation().search.slice(1));
    const name= query.get('name') || '';
    const history=useHistory()
    const dispatch = useDispatch()
    const [input,setInput] = useState({
        continent:'',
    })

    const [order,setOrder]=useState('');

    const handlerOnChange =({target:{name,value}}) => setInput({
        ...input,
        [name]:value
    })

    const handleOnClick =() => dispatch(orderFilter({...input,name,order}))


    return(
        <div>
            <div>
                <h4>Filtrar por...</h4>
                <div>
                <label>Continent</label>
                <select value={input.continent} onChange={handlerOnChange} name='continent' id='continent'>
                    <option value=''>-</option>
                    {
                        ['Asia','Americas','Europe','Africa','Oceania','Antarticas'].map(state => (
                            <option key={state} value={state}>{state}</option>
                        ))
                    }
                </select>
                </div>
                <div>
                    <h4>Ordenar por...</h4>
                    <div>
                        <label htmlFor=''>Alfabeto</label>
                        <select value={order} onChange={e => setOrder(e.target.value)} name='ordenAZ' id=''>
                            <option value=''>-</option>
                            <option value='asc'>ASC</option>
                            <option value='dsc'>DSC</option>
                        </select>
                    </div>
                </div>
            </div>
            <button onClick={handleOnClick}>Buscar</button>
            <button onClick={() => history.push('/main')}>Reset Filter</button>
        </div>
    )
};

export default Filter;