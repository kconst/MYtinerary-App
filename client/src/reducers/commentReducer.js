import {COMMENT_ACQUIRED, COMMENT_POSTED} from '../actions/types';

const initState = {
    comments: [],


    }
    
    const commentReducer = (state = initState, action) => {
        switch (action.type) {
            case COMMENT_ACQUIRED:
            return {
            ...state,
            comments: action.payload
        };
            case COMMENT_POSTED:
            return {
            ...state,
            comments: [action.payload, ...state.comments]
            }
        default:
        return state;
    }
};
    
    export default commentReducer;