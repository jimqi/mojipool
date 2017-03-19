import React, { Component } from 'react';
import { connect } from 'react-redux';

import './register.css';

class RegistrationPage extends Component {
    render() {
        return (  <div className="container">
                  <div id="login" className="signin-card">
                    <div className="logo-image">

                    </div>
                    <h1 className="display1 text-center" >Login</h1>

                    <form action="" method="" className="" role="form">
                     <p className="subhead">Login</p>
                      <div id="form-login-username" className="form-group">
                        <input id="username" className="form-control" name="username" type="text" size="18" alt="login" required/>
                        <span className="form-highlight"></span>
                        <span className="form-bar"></span>
                      </div>
                       <p className="subhead">Password</p>
                      <div id="form-login-password" className="form-group">
                        <input id="passwd" className="form-control" name="password" type="password" size="18" alt="password" required/>
                        <span className="form-highlight"></span>
                        <span className="form-bar"></span>
                      </div>

                      <div>
                        <button className="btn btn-block btn-info" type="submit" name="Submit" alt="sign in">Sign In</button>
                  	  </div>

                    </form>
                  </div>
                  </div>
        )
    }
}



function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps, null)(RegistrationPage);