import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    componentWillMount() {
        if (this.props.sessionId) {
            this.context.router.push('/groups');
        }
        if (!this.props.mojioToken) {
            getMojioToken();
        }
    }
    render() {

        return (
            <div>
                {this.props.children}
            </div>
        )

    }
}

function getMojioToken() {
    console.log("Need mojio token");
    var config = {
        application: 'a799da17-bebf-4d48-a9d0-a673d11c2b1b' // your application ID
    };

    const mojio_client = new window.MojioClientLite(config);
    //mojio_client.authorize();
}

function mapStateToProps(state) {
    return {
        mojioToken: state.sessionInfo.mojioToken,
    }
}

export default connect(mapStateToProps, null)(App);