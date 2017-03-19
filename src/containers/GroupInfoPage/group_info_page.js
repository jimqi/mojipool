import React, { Component } from 'react';
import { connect } from 'react-redux';

import './group_info_page.css';
class RegistrationPage extends Component {

    render() {
        return (
<div className="card">
    <h3 className="card-header primary-color white-text">Featured</h3>
    <div className="card-block">
        <h4 className="card-title">Special title treatment</h4>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a className="btn btn-primary">Go somewhere</a>
    </div>
</div>

        )
    }
}





function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps, null)(RegistrationPage);
