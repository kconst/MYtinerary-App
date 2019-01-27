import axios from 'axios';
import {COMMENT_ACQUIRED} from './types';
import {COMMENT_POSTED} from './types';

export const getComments = (id) => dispatch => {
    console.log("hi",id);
    axios.get(`/api/comments/${id}`).then(res => {
        console.log(res.data)
        dispatch({
        type: COMMENT_ACQUIRED,
        payload: res.data
        })
    }
    );
};

export const postComments = (comment) => dispatch => {
    console.log("hi",comment);
    axios.post(`/api/comments`,comment).then(res => {
        console.log(res.data)
        dispatch({
        type: COMMENT_POSTED,
        payload: res.data
        })
    }
    );
};