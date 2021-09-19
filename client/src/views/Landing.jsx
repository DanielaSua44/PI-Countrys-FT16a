import React from 'react';
import styles from './landing.module.css'
import { useHistory } from 'react-router';

const Landing = () => {
    const history = useHistory();

    const handleClick = () => history.push('/main')
    return(
        <div className ={styles.div}>
            <button className={styles.button} onClick ={handleClick}>
                HENRY-COUNTRY
            </button>
        </div>
    )
}

export default Landing;