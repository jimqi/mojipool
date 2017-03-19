import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchGroup} from '../../actions/actions';
import TripList from './TripList/trip_list';
import InfoPanel from './InfoPanel/info_panel';
import MembersList from './MembersList/members_list';

import './group_info_page.css';
class RegistrationPage extends Component {
    componentWillMount() {
        //this.props.fetchGroup(this.props.params.id);
        console.log(this.props.params.id);
    }

    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid"><h1>Group Info</h1>
                    <p>Manage gas cost per member and access historical trip information.</p>

                </div>
                <div className="container">

                    <InfoPanel groupId={this.props.params.id}/>
                    <TripList groupId={this.props.params.id}/>
                    <MembersList groupId={this.props.params.id}/>

                </div>
            </div>

        )
    }
}


function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps, {fetchGroup})(RegistrationPage);
