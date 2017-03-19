import { combineReducers } from 'redux';
import TestReducer from './reducer_test';
import GroupsReducer from './reducer_groups';
import UserReducer from './reducer_user';

const rootReducer = combineReducers({
    test: TestReducer,
    userId: UserReducer,
    groups: GroupsReducer
})

export default rootReducer;