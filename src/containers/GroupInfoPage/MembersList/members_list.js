import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMembers } from '../../../actions/actions';

class MembersList extends Component {
    constructor(props) {
        super(props);
        this.state = { groupId: props.groupId }
        this.renderMembers = this.renderMembers.bind(this);
    }
    componentWillMount() {
        this.props.fetchMembers(this.state.groupId);
    }

    renderMembers() {
        console.log(this.props.group);
        if (!this.props.group.members) {
            return <div> Loading... </div>
        }
        console.log(this.props.group.members);
        return this.props.group.members.map((member) => {
            return (
                <li> {member.memberName} </li>
            )
        })
    }
    render() {
        return (
            <div>
                <ul>
                    {this.renderMembers}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        group: state.sessionInfo.group
    }
}
export default connect(mapStateToProps, {fetchMembers})(MembersList);