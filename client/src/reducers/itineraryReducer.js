import {ITINERARY_ACQUIRED} from '../actions/types';

const initState = {
    itineraries: []
    }
    
    const itineraryReducer = (state = initState, action) => {
    console.log(action.payload);

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