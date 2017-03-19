import axios from 'axios';

const SERVER_ADDRESS = 'http://40.71.231.27:5000';
const TEST_ACTION = 'TEST_ACTION';
const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';
const CREATE_GROUP = 'CREATE_GROUP';
const FETCH_GROUP = 'FETCH_GROUP';
const FETCH_GROUPS = 'FETCH_GROUPS';

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
    const request = axios.post(`${SERVER_ADDRESS}/register`, {
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
    const request = axios.get(`${SERVER_ADDRESS}/groups`);

    return {
        type: FETCH_GROUPS,
        payload: request
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