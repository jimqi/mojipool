import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGroup } from '../../actions/actions';

import './create_group.css';

class CreateGroup extends Component {
    render() {
        return(
            <div> Placeholder </div>
        )

    }
}

export default connect(null, { createGroup })(CreateGroup);