import {GET_ALL_GAMES} from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:8080/getAllGames';

export const fetchData = (data) => {
    return {
        type: GET_ALL_GAMES,
        data
    }
};

export const getAllGames = () => {
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(response => {
                dispatch(fetchData(response.data))
            })
            .catch(error => {
                throw(error);
            })
    }
};