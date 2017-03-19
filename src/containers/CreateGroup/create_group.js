import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGroup } from '../../actions/actions';

import './create_group.css';

class CreateGroup extends Component {
    constructor(props) {
        super(props);

        this.state = { vehicles: []};
    }
    componentWillMount() {
        var config = {
            application: 'a799da17-bebf-4d48-a9d0-a673d11c2b1b' // your application ID
        };
        const mojio_client = new window.MojioClientLite(config);
        if (mojio_client.token()) {
            mojio_client.get().vehicles().then((response) => {
                this.setState({vehicles: response.Data});
                console.log(this.state);
            })
        } else {
            mojio_client.authorize();
        }
    }

    render() {
        return(
            <div> test </div>
        )

    }
}

export default connect(null, { createGroup })(CreateGroup);