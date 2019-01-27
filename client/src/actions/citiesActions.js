import axios from 'axios';
import {CITY_ACQUIRED} from './types';

export const getCities = () => dispatch => {
    console.log("response");
    axios.get("/api/city").then(res => 
        dispatch({
        type: CITY_ACQUIRED,
        payload: res.data
        })
    );
};

