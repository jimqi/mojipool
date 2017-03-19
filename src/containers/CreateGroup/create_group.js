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
             <div>
              <div className="jumbotron jumbotron-fluid"><h1>Creating a Group</h1></div>
              <form onSubmit={this.onSubmit} role="form">
              <div className="container">
              <div className="panel panel-default">
              <div className="panel-heading"><h4 className="text-center">Name of Group</h4></div>
              <div className="panel-body">

              <div id="form-register-username" className="form-group">
                  <input id="groupname" value="" className="form-control" name="groupname" type="text" size="18"
                         alt="login" onChange={(event) => this.setState({ username: event.target.value })} required/>
                  <span className="form-highlight"></span>
                  <span className="form-bar"></span>
              </div>
              </div>
              </div>


              <div>
               <div className="panel panel-default">
                            <div className="panel-heading"><h4 className="text-center">Choose Vehicle</h4></div>
                            <div className="panel-body">
                                <select className="form-control" >
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                                </select>

                                                                </div>
                                                          </div>
                                                      <button className="btn btn-block btn-info" type="submit" name="Submit">Create
                                                      </button>
                                                  </div>
                                                </div>
                                              </form>

             </div>
        )

    }
}

export default connect(null, { createGroup })(CreateGroup);