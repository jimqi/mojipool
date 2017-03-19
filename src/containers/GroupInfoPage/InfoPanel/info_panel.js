import React, { Component } from 'react';
import { connect } from 'react-redux';

class InfoPanel extends Component {
    render() {
        return (
            <div>
            <div className="col-md-12">
            <div className="panel panel-default">
            <div className="panel-heading"><h2 className="text-primary text-center">Amount Owed to Driver</h2></div>
            <div className="panel-body">
            <div id="user1"><h4 className="text-primary">User 1</h4>
            <div className="progress">
                   <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40"
                   aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}>
                     40%
                   </div>
            </div>
            </div>

            <div id="user2"><h4 className="text-primary">User 2</h4>
             <div className="progress">
                               <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40"
                               aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}>
                                 40%
                               </div>
             </div>
             </div>

            <div id="user3"><h4 className="text-primary">User 3</h4>
             <div className="progress">
                               <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40"
                               aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}>
                                 40%
                               </div>
              </div>
              </div>
              </div>
</div>
</div>











            </div>
        )
    }
}

export default connect()(InfoPanel);