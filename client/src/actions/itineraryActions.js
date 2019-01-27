import axios from 'axios';
import {ITINERARY_ACQUIRED} from './types';

export const getItineraries = (cityLink) => dispatch => {
    console.log(cityLink);
    axios.get(`/api/itinerary/${cityLink}`).then(res => {
        console.log(res.data)
        dispatch({
        type: ITINERARY_ACQUIRED,
        payload: res.data
        })
    }
    );
};