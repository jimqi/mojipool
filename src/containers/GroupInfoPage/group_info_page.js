import React, { Component } from 'react';
import { connect } from 'react-redux';

import TripList from './TripList/trip_list';
import InfoPanel from './InfoPanel/info_panel';
import MembersList from './MembersList/members_list';

import './group_info_page.css';
class RegistrationPage extends Component {

    render() {
        return (
        <div>
        <div className="jumbotron jumbotron-fluid"><h1>Group Info</h1>
           <p>Manage gas cost per member and access historical trip information.</p>

         </div>
         <div className="container">
        <div className="col-md-12">
         <InfoPanel/>
         </div>
         <div className="col-md-6">
         <TripList/>
         </div>
         <div className="col-md-6">
         <MembersList/>
         </div>

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
