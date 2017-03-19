import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import { fetchGroups, setupMojioClient } from '../../actions/actions';
import GroupListItem from '../../components/GroupListItem/group_list_item';

import './groups_page.css';
class RegistrationPage extends Component {
    onClick(event) {
        console.log("Adding a group");
    }

    renderGroups() {
        return this.props.groups.map((group) => {
            return (
                <GroupListItem groupName={group.groupName} numMembers={group.numMembers} key={group.groupId} />
            )
        })
    }

    render() {
        return (
                <div>
                    <div className="jumbotron"><h1>Manage Groups</h1>
                    <p>Create or Choose a Group</p>
                    </div>
                <div className="container">
<div className="col-md-6">
                <div className="panel panel-default">
                <div className="panel-heading"><h1>Create New Group</h1></div>
                <div className="panel-body">
                    <Link to="create">
                        <button className="btn btn-outline-primary ">Create Group</button>
                    </Link>
                    </div>
                </div>
                </div>



<div className="col-md-6">

 <div className="panel panel-default">
                <div className="panel-heading"><h1>Choose Existing Group</h1></div>
                <div className="panel-body">

                <ul>
                    {this.renderGroups()}
                </ul>
                </div>
                </div>
                </div>
                </div>
</div>

        )
    }
}


function mapStateToProps(state) {
    return {
        groups: state.groups.all,
        mojioToken: state.sessionInfo.mojioToken,
        mojioClient: state.sessionInfo.mojioClient,
    }
}

export default connect(mapStateToProps, { fetchGroups, setupMojioClient })(RegistrationPage);
