import React from 'react';
import Countries from '../component/Countries';
import Filter from '../component/filter/Filter';


const Home = () => {
    return(
        <div>
            <Filter/>
            <Countries/>
        </div>
    )
}

export default Home;