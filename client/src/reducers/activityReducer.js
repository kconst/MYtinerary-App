import {ACTIVITY_ACQUIRED} from '../actions/types';

const initState = {
    activities: []
    }
    
    const activityReducer = (state = initState, action) => {
    console.log(action.payload);

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