import React from 'react';
import { Link } from 'react-router';

import './group_list_item.css';
const GroupListItem = ({groupName, numMembers, groupId}) => {
    return (
        <Link to={`groups/${groupId}`}>
            <div className="col-md-6">
                <div className="specialpanel">
                    {groupName} {numMembers} {groupId}
                </div>
            </div>
        </Link>
    )
}

export default GroupListItem;