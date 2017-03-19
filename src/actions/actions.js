import axios from 'axios';

export const SERVER_ADDRESS = 'http://40.71.231.27:5000';
export const TEST_ACTION = 'TEST_ACTION';
export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const CREATE_GROUP = 'CREATE_GROUP';
export const FETCH_GROUP = 'FETCH_GROUP';
export const FETCH_GROUPS = 'FETCH_GROUPS';
export const FETCH_GROUPS_SUCCESS = 'FETCH_GROUPS_SUCCESS';
export const FETCH_GROUPS_FAILURES = 'FETCH_GROUPS_FAILURE';

export function testAction(testString) {
    console.log(testString);
    return {
        type: TEST_ACTION,
        payload: testString,
    }
}

export function login(username, password) {
    const request = axios.post(`${SERVER_ADDRESS}/login`, {
        username: username,
        password: password
    });

    return {
        type: LOGIN,
        payload: request,
    }
}

export function register(username, password) {
    const request = axios.post(`${SERVER_ADDRESS}/signup`, {
        username: username,
        password: password
    });

    return {
        type: REGISTER,
        payload: request,
    }
}

export function fetchGroup(groupId) {
    const request = axios.get(`${SERVER_ADDRESS}/groups/${groupId}`);

    return {
        type: FETCH_GROUP,
        payload: request
    }
}

export function fetchGroups() {
    return function (dispatch) {
        axios.get(`${SERVER_ADDRESS}/groups`)
            .then((response) => {
                dispatch(fetchGroupsSuccess(response));
            }).catch((err) => {
                dispatch(fetchGroupsFailure(err));
            }
        )
    }
}

export function fetchGroupsSuccess(response) {
    return {
        type: FETCH_GROUPS_SUCCESS,
        payload: response
    }
}

export function fetchGroupsFailure(err) {
    return {
        type: FETCH_GROUPS_SUCCESS,
        payload: err
    }
}
export function createGroup(groupName) {
    const request = axios.post(`${SERVER_ADDRESS}/groups`, {
        groupname: groupName
    });

    return {
        type: CREATE_GROUP,
        payload: request
    }
}