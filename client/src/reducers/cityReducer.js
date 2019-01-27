import {CITY_ACQUIRED} from '../actions/types';

const initState = {
    cities: []
    }
    
    const cityReducer = (state = initState, action) => {
    //console.log(action.payload);

        switch (action.type) {
            case CITY_ACQUIRED:
        return {
            ...state,
            cities: action.payload
        };
        default:
        return state;
    }
};
    
    export default cityReducer;