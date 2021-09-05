import axios from 'axios';

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES"
export const GET_COUNTRY = "GET_COUNTRY"
export const GET_CREATE = "GET_CREATE"
export const UNMOUNT_ALL_COUNTRIES = "UNMOUNT_ALL_COUNTRIES"

export const allCountries = (name) => dispatch => {
    try {
        if (name) {
            return axios.get(`/countries?name=${name}`)
                .then(res => dispatch({ type: GET_ALL_COUNTRIES, payload: res.data }))
        }
        return axios.get('/countries')
            .then(res => dispatch({ type: GET_ALL_COUNTRIES, payload: res.data }))
    } catch (err) {
        console.log(err)
    }
}


export const allCountry = id => dispatch => {
    try {
        return axios.get(`/countries/${id}`)
            .then(res => dispatch({ type: GET_COUNTRY, payload: res.data }))
    } catch (err) {
        console.log(err)
    }
}

export const create = value => dispatch => {
    try {
        return axios.post('/activities', { ...value })
            .then(res => dispatch({ type: GET_CREATE, payload: res.data }))
    } catch (err) {
        console.log(err)
    }
};

export const unmountAllCountries = () => ({ type: UNMOUNT_ALL_COUNTRIES })