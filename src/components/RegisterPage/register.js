import React, { Component } from 'react';
import { connect } from 'react-redux';

import './register.css';

class Register extends Component {
    render() {
        return (
            <div> Placeholder for Registration </div>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps, null)(Register);