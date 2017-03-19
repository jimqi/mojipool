import React, { Component } from 'react';
import { connect } from 'react-redux';

class TripList extends Component {
    render() {
        return (
            <div>



             <div className="col-md-12">
                        <div className="panel panel-default">
                        <div className="panel-heading"><h2 className="text-primary text-center">Past Trips</h2></div>
                        <div className="panel-body">
                         </div>
                         </div>
            </div>
            </div>




        )
    }
}

export default connect()(TripList);