import axios from 'axios';

const SERVER_ADDRESS = 'http://40.71.231.27:5000';
const TEST_ACTION = 'TEST_ACTION';
const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';

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

export function createGroup(groupName) {
    const request = axios.post(`${SERVER_ADDRESS}/groups`)
}