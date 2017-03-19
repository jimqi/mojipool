import { FETCH_GROUP, FETCH_GROUPS, FETCH_MEMBERS } from '../actions/actions';

const TEST_GROUP_1 = {
    groupName: "test_group_1",
    numMembers: 2,
    groupId: 1
}

const TEST_GROUP_2 = {
    groupName: "test_group_2",
    numMembers: 5,
    groupId: 2
}

const INITIAL_STATE = { all: [TEST_GROUP_1, TEST_GROUP_2], group: {} };

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_GROUP:
            return {...state, group: action.payload.data }
        case FETCH_GROUPS:
            console.log(action.payload);
            return {...state, all: action.payload.data };
        case FETCH_MEMBERS:
            console.log(action.payload);
            return {...state, group: {...state.group, members: action.payload.members}}
        default:
            return state;
    }
}