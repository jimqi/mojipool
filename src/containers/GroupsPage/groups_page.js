import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchGroups } from '../../actions/actions';
import GroupListItem from '../../components/GroupListItem/group_list_item';

import './groups_page.css';
class RegistrationPage extends Component {
    componentWillMount() {
        this.props.fetchGroups();
    }

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
                <div className="">
                    <div className="jumbotron"><h1>Manage Groups</h1>
                    <p>Create or Choose Group</p>
                    </div>
                <div className="container">

                    <div className="card-block">

                        <div id="education_fields">

                        </div>
                        <div className="col-sm-3 nopadding">
                            <div className="form-group">
                                <input type="text" className="form-control" id="firstname" name="firstname[]" value=""
                                       placeholder="First Name"/>
                            </div>
                        </div>
                        <div className="col-sm-3 nopadding">
                            <div className="form-group">
                                <input type="text" className="form-control" id="lastname" name="lastname[]" value=""
                                       placeholder="Last Name"/>
                            </div>
                        </div>


                        <div className="col-sm-3 nopadding">
                            <div className="form-group">
                                <div className="input-group">

                                    <div className="input-group-btn">
                                        <button className="btn btn-success" type="button" onClick={this.onClick}>
                                            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clear"></div>

                    </div>
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
        groups: state.groups.all
    }
}

export default connect(mapStateToProps, { fetchGroups })(RegistrationPage);
