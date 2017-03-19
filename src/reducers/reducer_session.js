import { LOGIN, REGISTER } from '../actions/actions';

const INITIAL_STATE = {userId: null, sessionId: null};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN:
            return {userId: action.payload.data.uID, sessionId: action.payload.data.sessionId};
        case REGISTER:
            return {userId: action.payload.data.uID, sessionId: action.payload.data.sessionId};
        default:
            return state;
    }
}