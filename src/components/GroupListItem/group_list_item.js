import React from 'react';

import './group_list_item.css';
const GroupListItem = ({ groupName, numMembers }) => {
    return (
    <div className="col-md-6">
               <div className="specialpanel">
               {groupName} {numMembers}
               </div>
   </div>
    )
}

export default GroupListItem;