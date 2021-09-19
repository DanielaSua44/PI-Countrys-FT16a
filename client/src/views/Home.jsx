import React from 'react';
import Countries from '../component/Countries';
import Filter from '../component/filter/Filter';
import './home.css'


const Home = () => {
   
    return(
        <div className='body'>
            <Filter/>
            <Countries/>
        </div>
    )
}

export default Home;