import { FETCH_GROUP, FETCH_GROUPS } from '../actions/actions';

const TEST_GROUP_1 = {
    groupName: "test_group_1",
    groupId: 1
}

const TEST_GROUP_2 = {
    groupName: "test_group_2",
    groupId: 2
}

const INITIAL_STATE = { all: [TEST_GROUP_1, TEST_GROUP_2], group: null };

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_GROUP:
            return state; //TODO
        case FETCH_GROUPS:
            return {...state, all: action.payload.data };
        default:
            return state;
    }
}