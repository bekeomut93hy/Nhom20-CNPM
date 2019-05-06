import React, { Component } from 'react';

class button extends Component {
    render() {
        return (
            <div className="ml-auto mr-2">
            <label className="form-switch">
                  <input type="checkbox" />
                  <i> </i>
                </label>
            </div>
        );
    }
}

export default button;