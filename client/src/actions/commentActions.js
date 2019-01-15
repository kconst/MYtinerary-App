import axios from 'axios';
import {COMMENT_ACQUIRED} from './types';
import {COMMENT_POSTED} from './types';

export const getComments = (id) => dispatch => {
    console.log("hi");
    axios.get(`/api/comments/${id}`).then(res => {
        console.log(res.data)
        dispatch({
        type: COMMENT_ACQUIRED,
        payload: res.data
        })
    }
    );
};

export const postComments = () => dispatch => {
    console.log("hi");
    axios.post(`/api/comments`).then(res => {
        console.log(res.data)
        dispatch({
        type: COMMENT_POSTED,
        payload: res.data
        })
    }
    );
};