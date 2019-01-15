import axios from 'axios';
import {ACTIVITY_ACQUIRED} from './types';

export const getActivities = (id) => dispatch => {
    console.log("hi");
    console.log(id);
    axios.get(`/api/activity/${id}`).then(res => {
        console.log(res.data)
        dispatch({
        type: ACTIVITY_ACQUIRED,
        payload: res.data
        })
    }
    );
};