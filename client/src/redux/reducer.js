import { FILTER_BY_ACTIVITY,GET_CREATE, FILTER_POPULATION, GET_ALL_COUNTRIES, GET_COUNTRY, ORDER_FILTER, UNMOUNT_ALL_COUNTRIES, GET_ACTIVITY } from "./actions";

const inicialState = {
    countries: [],
    allCountry: [],
    country: [],
    activitys: []
}
const rootReducer = (state = inicialState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountry: action.payload
            };
        case GET_COUNTRY:
            return {
                ...state,
                country: action.payload
            }
        case GET_CREATE:
            return{
                ...state,
                activitys:action.payload,
            }
        case ORDER_FILTER:
            const { order, payload } = action
            return {
                ...state,
                countries: payload.slice().sort((a, b) => {
                    if (order === 'asc') {
                        return a.name.localeCompare(b.name);
                    }
                    return b.name.localeCompare(a.name)
                })
            }
        case UNMOUNT_ALL_COUNTRIES:
            return {
                ...state,
                countries: []
            }
        case GET_ACTIVITY:
            return {
                ...state,
                activitys: action.payload,
            }
        case FILTER_BY_ACTIVITY:
            const allCountries = state.allCountry
            const actyFilter = action.payload === 'All' ? allCountries :
                allCountries.filter(el => el.activies ? el.activies.includes(action.payload):allCountries)
            return {
                ...state,
                activitys: actyFilter
            }
        case FILTER_POPULATION:
            let orderPopu = action.payload === "asc"?
            state.countries.sort((a,b) => {
                return a.population - b.population
            })
            :
            state.countries.sort((a,b) =>{
                return b.population - a.population
            })
            return{
                ...state,
                countries:orderPopu
            }
        default:
            return state;
    }
}

export default rootReducer;