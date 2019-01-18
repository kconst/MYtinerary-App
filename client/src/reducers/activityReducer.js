import {ACTIVITY_ACQUIRED} from '../actions/types';

const initState = {
    activities: []
    }
    
    const activityReducer = (state = initState, action) => {
        switch (action.type) {
            case ACTIVITY_ACQUIRED:
        return {
            ...state,
            activities: action.payload
        };
        default:
        return state;
    }
};
    
    export default activityReducer;