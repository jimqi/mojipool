import axios from 'axios';

export const SERVER_ADDRESS = 'https://40.71.231.27:5000';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER = 'REGISTER';
export const CREATE_GROUP = 'CREATE_GROUP';
export const FETCH_GROUP = 'FETCH_GROUP';
export const FETCH_GROUPS = 'FETCH_GROUPS';
export const FETCH_GROUPS_SUCCESS = 'FETCH_GROUPS_SUCCESS';
export const FETCH_MEMBERS = 'FETCH_MEMBERS';
export const ADD_MEMBERS = 'ADD_MEMBERS';

export function login(username, password) {
    return function (dispatch) {
        axios.post(`${SERVER_ADDRESS}/login`, {
            username: username,
            password: password
        }).then((response) => {
            dispatch(loginSuccess(response));
        }).catch((err) => {
            dispatch(loginFailure(err));
        })
    }
}

export function loginSuccess(response) {
    return {
        type:LOGIN_SUCCESS,
        payload: response
    }
}

export function loginFailure(err) {
    return {
        type: LOGIN_FAILURE,
        payload: err
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

export function fetchMembers(groupId) {
    const request = axios.put(`${SERVER_ADDRESS}/groups`, {
        groupId: groupId
    });

    return {
        type: FETCH_MEMBERS,
        payload: request
    }
}

export function addMembers(username, groupname) {
    const request = axios.put(`${SERVER_ADDRESS}/addMembers`, {
        username: username,
        groupname: groupname
    });

    return {
        type: ADD_MEMBERS,
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
export function createGroup(uID, groupName) {
    const request = axios.post(`${SERVER_ADDRESS}/groups`, {
        uID: uID,
        groupName: groupName
    });

    return {
        type: CREATE_GROUP,
        payload: request
    }
}