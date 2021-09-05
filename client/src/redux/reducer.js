import { GET_ALL_COUNTRIES, GET_COUNTRY, GET_CREATE, UNMOUNT_ALL_COUNTRIES } from "./actons";

const inicialState={
    countries:[],
    country :{},
    activitys:[]
}

const rootReducer = (state = inicialState,action) => {
    switch(action.type){
        case GET_ALL_COUNTRIES :
            return {
                ...state,
                countries:action.payload
            };
        case GET_COUNTRY:
            return {
                ...state,
                country:action.payload
            }
        case GET_CREATE:
            return{
                ...state,
                activitys:action.payload
            }
        case UNMOUNT_ALL_COUNTRIES:
            return{
                ...state,
                countries:[]
            }
        default:
            return state;
    }
}

export default rootReducer;