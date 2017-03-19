import { combineReducers } from 'redux';
import TestReducer from './reducer_test';
import GroupsReducer from './reducer_groups';
import SessionReducer from './reducer_session';

const rootReducer = combineReducers({
    test: TestReducer,
    sessionInfo: SessionReducer,
    groups: GroupsReducer
})

export default rootReducer;