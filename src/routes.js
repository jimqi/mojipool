import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';

const Placeholder = () => {
    return <div> Under Construction </div>
}

export default (
    <Route path="/" component={App} >
        <IndexRoute component={Placeholder} />
    </Route>
)