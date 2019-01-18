import {ITINERARY_ACQUIRED} from '../actions/types';

const initState = {
    itineraries: []
    }
    
    const itineraryReducer = (state = initState, action) => {
        switch (action.type) {
            case ITINERARY_ACQUIRED:
        return {
            ...state,
            itineraries: action.payload
        };
        default:
        return state;
    }
};
    
    export default itineraryReducer;