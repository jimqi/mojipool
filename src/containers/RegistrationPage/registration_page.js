import React, { Component } from 'react';
import { connect } from 'react-redux';

import './register.css';

class RegistrationPage extends Component {
    render() {
        return (
            <div htmlClass="placeholder-div"> Placeholder for Registration </div>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps, null)(RegistrationPage);