import {GET_ALL_GAMES} from '../actions/types';

export default function gamesReducer(state = [], action) {
    switch (action.type) {
        case GET_ALL_GAMES:
            return action.data;
        default:
            return state;
    }
}