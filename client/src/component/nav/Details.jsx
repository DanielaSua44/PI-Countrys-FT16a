import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create } from '../../redux/actions';
import { Link } from 'react-router-dom'

function Details(props) {
    const details = useSelector(state => state.country);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(create(props.match.params.id))
    }, [dispatch]);

    return (
        <div className="detail">
            {details > 0 ?
                <div >
                    <h2 className="nameC">{details[0].name}</h2>
                    <div className="allDetails">
                        <img className="imgDetails" src={details[0].flag} alt="Not found"></img>
                        <h5>{details[0].continent}</h5>
                        <h3>Continent</h3>
                        <h4>{details[0].area}</h4>
                        <h4>{details[0].population}</h4>
                        <h4>{details[0].capital}</h4>
                        <h4>{details[0].subregion}</h4>
                        <h4>Activities:
                            {details.activities ? details[0].activities + '' : details[0].activities.map(i => (
                                <h5>{i}</h5>
                            ))}</h4>
                    </div>
                </div> : <p>loading...</p>
            }
            <Link to='/main'>
                <button>volver</button>
            </Link>
        </div>
    )
};

export default Details;