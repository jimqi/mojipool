import { LOGIN, REGISTER } from '../actions/actions';

const INITIAL_STATE = null;

export default function (state = INITIAL_STATE, action) {
        console.log(action);
    switch (action.type) {
        case LOGIN:
            return state;
        case REGISTER:
            return state;
        default:
            return state;
    }
}