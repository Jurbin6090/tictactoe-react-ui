import {GET_ALL_GAMES, GET_A_GAME, TAKE_TURN} from '../actions/types';

export default function gamesReducer(state = [], action) {
    switch (action.type) {
        case GET_ALL_GAMES:
            return action.data;
        case GET_A_GAME:
            return action.data;
        case TAKE_TURN:
            return action.data;
        default:
            return state;
    }
}