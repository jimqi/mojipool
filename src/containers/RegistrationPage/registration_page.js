import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { register } from '../../actions/actions';

import './register.css';

class RegistrationPage extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    constructor(props) {
        super(props);

        this.state = { username: "", password: ""};

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.register(this.state.username, this.state.password).then((res) => {
            if (res.payload.message === "Network Error") {
                alert("Registration Failed");
            } else {
                this.context.router.push('/groups');
            }
        })
    }

    render() {
        return (
            <div className="container">
                <div id="login" className="signin-card">
                    <div className="logo-image">

                    </div>
                    <h1 className="display1 text-center">Register</h1>

                    <form onSubmit={this.onSubmit} role="form">
                        <p className="subhead">Username</p>
                        <div id="form-register-username" className="form-group">
                            <input id="username" value={this.state.username} className="form-control" name="username" type="text" size="18"
                                   alt="login" onChange={(event) => this.setState({ username: event.target.value })} required/>
                            <span className="form-highlight"></span>
                            <span className="form-bar"></span>
                        </div>
                        <p className="subhead">Password</p>
                        <div id="form-register-password" className="form-group">
                            <input id="passwd" value={this.state.password} className="form-control" name="password" type="password" size="18"
                                   alt="password" onChange={(event) => this.setState({ password: event.target.value })} required/>
                            <span className="form-highlight"></span>
                            <span className="form-bar"></span>
                        </div>

                        <div>
                            <button className="btn btn-block btn-info" type="submit" name="Submit" alt="sign in">Sign In
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}


export default connect(null, { register })(RegistrationPage);