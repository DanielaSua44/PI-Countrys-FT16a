import react from 'react';
import {useHistory} from 'react-router-dom';
import SearchBar from './SearchBar';

const Nav = () => {
    const history=useHistory();
    return(
        <div style={{display:'flex',justifyContent:'space-around'}}>
            <div>
                Logo
            </div>
            <button onClick={() => history.push('/main')}>Home</button>
            <button onClick={() =>history.push('/main/create_activy')}>Create Activy</button>
            <div>
                <SearchBar/>
            </div>

        </div>
    )
};

export default Nav;