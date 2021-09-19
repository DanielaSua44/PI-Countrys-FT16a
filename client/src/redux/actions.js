import axios from 'axios';

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES"
export const GET_COUNTRY = "GET_COUNTRY"
export const GET_CREATE = "GET_CREATE"
export const UNMOUNT_ALL_COUNTRIES = "UNMOUNT_ALL_COUNTRIES"
export const ORDER_FILTER = "ORDER_FILTER"
export const FILTER_AREA = "FILTER_AREA"
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY"
export const FILTER_POPULATION = "FILTER_POPULATION"
export const GET_ACTIVITY = "GET_ACTIVITY"
export const SET_QUERIES = "SET_QUERIES"

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

export const createActy = value => dispatch => {
    try {
        return axios.post('/activities',{ ...value })
            .then(res => dispatch({ type: GET_CREATE, payload: res.data }))
    } catch (err) {
        console.log(err)
    }
};


export const unmountAllCountries = () => ({ type: UNMOUNT_ALL_COUNTRIES })

export const orderFilter = values => dispatch => {
    const { name, order, continent } = values
    return axios.get(`/countries?name=${name}&&continent=${continent}`)
        .then(res => {
            if (values.order) return dispatch({ type: ORDER_FILTER, payload: res.data, order: order });
            dispatch({ type: GET_ALL_COUNTRIES, payload: res.data })
        })
        .catch(err => console.log(err))
};

export function getActivity() {
    return async function(dispatch) {
        try {
            const response = await axios.get('/activities')
            return dispatch({type: GET_ACTIVITY, payload: response.data}) 

        } catch(error) {
            console.log(error)
        }
    }
}

export function filterByActivity(payload) {
    return {
        type: FILTER_BY_ACTIVITY,
        payload
    }
}


export function filterPopulation(payload) {
    return {
        type: FILTER_POPULATION,
        payload
    }
}