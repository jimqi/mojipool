import { LOGIN_SUCCESS, REGISTER, GET_TOKEN } from '../actions/actions';

const INITIAL_STATE = {userId: null, sessionId: null, mojioToken: null};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {userId: action.payload.data.uID, sessionId: action.payload.data.sessionId};
        case REGISTER:
            return {userId: action.payload.data.uID, sessionId: action.payload.data.sessionId};
        case GET_TOKEN:
            return {mojioToken: action.payload}
        default:
            return state;
    }
}