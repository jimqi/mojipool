import React from 'react';
import { Link } from 'react-router';

import './group_list_item.css';
const GroupListItem = ({groupName, numMembers, groupId}) => {
    return (
    <div className="col-md-6 force-to-center">

        <Link className="btn btn-outline-primary" to={`groups/${groupId}`}>
                <div className="specialpanel">
                    {groupName} {numMembers} {groupId}
                </div>
        </Link>

   </div>
    )
}

export default GroupListItem;