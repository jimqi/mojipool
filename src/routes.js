import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import RegistrationPage from './containers/RegistrationPage/registration_page';

const Placeholder = () => {
    return <div> Under Construction </div>
}

export default (
    <Route path="/" component={App} >
        <IndexRoute component={Placeholder} />
        <Route path="register" component={RegistrationPage} />
    </Route>
)