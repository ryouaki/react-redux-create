import { ACTION_GET_MESSAGE } from '../actions';

const INITIAL_STATE = { };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ACTION_GET_MESSAGE:
            return { ...state, message: action.data };
        default:
            return state;
    }
}

