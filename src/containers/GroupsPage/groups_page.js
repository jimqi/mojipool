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
                <GroupListItem groupName={group.groupName} numMembers={group.numMembers} groupId={group.groupId} key={group.groupId} />
            )
        })
    }

    render() {
        return (
                <div className="">
                    <div className="jumbotron"><h1>Manage Groups</h1>
                    <p>Create or Choose Group</p>
                    </div>
                <div className="container">
                    <Link to="create">
                        <button>Create Group</button>
                    </Link>
                </div>

                <ul>
                    {this.renderGroups()}
                </ul>
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
