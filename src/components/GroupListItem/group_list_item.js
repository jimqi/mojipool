import React from 'react';

import './group_list_item.css';
const GroupListItem = ({ groupName, numMembers }) => {
    return (
    <div className="col-md-6 force-to-center">

               <button type="button" text="primary" className="btn btn-outline-primary">{groupName} {numMembers}</button>

   </div>
    )
}

export default GroupListItem;