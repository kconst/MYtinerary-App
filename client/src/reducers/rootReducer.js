import {combineReducers} from 'redux';
import cityReducer from './cityReducer';
import itineraryReducer from './itineraryReducer';
import activityReducer from './activityReducer';
import commentReducer from './commentReducer';

const rootReducer = combineReducers({
    reducerOne: cityReducer,
    reducerTwo: itineraryReducer,
    reducerThree: activityReducer,
    reducerFour: commentReducer
    
});

export default rootReducer;