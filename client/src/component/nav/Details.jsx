import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allCountry } from '../../redux/actions';
import { Link } from 'react-router-dom'
import './details.css'

function Details(props) {
    console.log(props)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allCountry(props.match.params.id))
    }, [dispatch]);

    const details = useSelector(state => state.country);

    return (
        <div className="detail">
            {
                details !== null?
                <div >
                    <h2 className="nameC">Country:{details.name}</h2>
                    <img className="imgDetails" src={details.flag} alt="Not found"></img>
                    <h5>Continent:{details.continent}</h5>
                    <h3>Continent</h3>
                    <h4>Total de Area en Km:{details.area}</h4>
                    <h4>Total poblacion:{details.population}</h4>
                    <h4>Capital:{details.capital}</h4>
                    <h4>Subregion:{details.subregion}</h4>
                    <h4>Activities:</h4>
                    <div>
                        {
                            details.activies?.map((el,index) =>{
                               return  <h4 key={index}>{el.name} ,difficulty:{el.difficulty} ,duration:{el.duration} ,season:{el.season}</h4>
                            })
                        }
                    </div>

                </div>: <p>...Loading</p>
            }
            <Link to='/main'>
                <button>volver</button>
            </Link>
        </div>
    )
};

export default Details;