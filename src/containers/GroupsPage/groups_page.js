import React, { Component } from 'react';
import { connect } from 'react-redux';

import './groups_page.css';
class RegistrationPage extends Component {
    onClick(event) {

    }
    render() {
        return (
<div className="panel panel-default">
  <div className="panel-heading">Manage Groups</div>
  <div className="panel-body">

  <div id="education_fields">

        </div>
       <div className="col-sm-3 nopadding">
  <div className="form-group">
    <input type="text" className="form-control" id="Schoolname" name="firstname[]" value="" placeholder="First Name"/>
  </div>
</div>
<div className="col-sm-3 nopadding">
  <div className="form-group">
    <input type="text" className="form-control" id="Major" name="lastname[]" value="" placeholder="Last Name"/>
  </div>
</div>


<div className="col-sm-3 nopadding">
  <div className="form-group">
    <div className="input-group">

      <div className="input-group-btn">
        <button className="btn btn-success" type="button"  onclick="education_fields();"> <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> </button>
      </div>
    </div>
  </div>
</div>
<div className="clear"></div>

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
