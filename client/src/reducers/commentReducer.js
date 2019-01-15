import {COMMENT_ACQUIRED} from '../actions/types';

const initState = {
    comments: []
    }
    
    const commentReducer = (state = initState, action) => {
    console.log(action.payload);

        switch (action.type) {
            case COMMENT_ACQUIRED:
        return {
            ...state,
            comments: action.payload
        };
        default:
        return state;
    }
};
    
    export default commentReducer;