import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import LoginPage from './containers/LoginPage/login_page';
import RegistrationPage from './containers/RegistrationPage/registration_page';
import GroupsPage from './containers/GroupsPage/groups_page';
import CreateGroup from './containers/CreateGroup/create_group';
import GroupInfoPage from './containers/GroupInfoPage/group_info_page';

const Placeholder = () => {
    return <div> Under Construction </div>
}

export default (
    <Route path="/" component={App} >
        <IndexRoute component={Placeholder} />
        <Route path="login" component={LoginPage} />
        <Route path="register" component={RegistrationPage} />
        <Route path="groups" component={GroupsPage} />
        <Route path="create" component={CreateGroup} />
        <Route path="groupinfo" component={GroupInfoPage} />
    </Route>
)