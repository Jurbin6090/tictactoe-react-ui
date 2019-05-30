import {GET_ALL_GAMES, TAKE_TURN} from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:8080';

export const fetchData = (data) => {
    return {
        type: GET_ALL_GAMES,
        data
    }
};

export const fetchData2 = (data) => {
    let val = []
    val.push(data)
    return {
        type: TAKE_TURN,
        data: val
    }
};

export const getAllGames = () => {
    return (dispatch) => {
        return axios.get(apiUrl + '/getAllGames')
            .then(response => {
                dispatch(fetchData(response.data))
            })
            .catch(error => {
                throw(error);
            })
    }
};

export const getAGame = (id) => {
    return (dispatch) => {
        return axios.get(apiUrl + '/getAGame/' + id)
            .then(response => {
                dispatch(fetchData(response.data))
            })
            .catch(error => {
                throw(error);
            })
    }
};

export const takeTurn = (gameId, row, column) => {
    return (dispatch) => {
        return axios.post(apiUrl + '/takeTurn/' + gameId + '/' + row + '/' + column)
            .then(response => {
                dispatch(fetchData2(response.data))
            })
            .catch(error => {
                throw(error);
            })
    }
}