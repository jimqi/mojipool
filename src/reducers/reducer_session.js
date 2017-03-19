import { browserHistory } from 'react-router';

import { LOGIN_SUCCESS, REGISTER } from '../actions/actions';

const INITIAL_STATE = {userId: null, sessionId: null};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            browserHistory.push('/groups')
            return {userId: action.payload.data.uID, sessionId: action.payload.data.sessionID};
        case REGISTER:
            browserHistory.push('/groups')
            return {userId: action.payload.data.uID, sessionId: action.payload.data.sessionID};
        default:
            return state;
    }
}