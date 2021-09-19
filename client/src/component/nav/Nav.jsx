import React from 'react';
import {useHistory} from 'react-router-dom';
import SearchBar from './SearchBar';

const Nav = () => {
    const history=useHistory();
    return(
        <div style={{display:'flex',justifyContent:'space-around',border:'1px',borderColor:'#ffc750',color:'#4ecc1e', backgroundColor:'#141a35',margin:'3',padding:'4px'}}>
            <div>
                Logo
            </div>
            <button onClick={() => history.push('/')}>Home</button>
            <button onClick={() =>history.push('/createActivy')}>Create Activy</button>
            <div>
                <SearchBar/>
            </div>

        </div>
    )
};

export default Nav;