import React, { Component } from 'react';

export default class Model extends Component {
    render() {
        
        return(
            <div className="modal show fade" >
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Modal title</h5>
                    <button type="button" className="btn-close"></button>
                </div>
                <div className="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
               
                </div>
            </div>
            </div>
        )
    }
}