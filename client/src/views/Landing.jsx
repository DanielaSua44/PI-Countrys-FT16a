import react from 'react';
import styles from './landing.module.css'
import { useHistory } from 'react-router';

const Landing = () => {
    const history = useHistory();

    const handleClick = () => history.push('/main')
    return(
        <div className ={styles.div}>
            <button onClick ={handleClick}>
                HENRY-MAP
            </button>
        </div>
    )
}

export default Landing;