import { TEST_ACTION } from '../actions/actions';

const INITIAL_STATE = "";

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case TEST_ACTION:
            console.log("Old state: " + state);
            console.log("Payload: " + action.payload);
            return action.payload;
        default:
            return state;
    }
}