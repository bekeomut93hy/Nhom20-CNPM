import React, { Component } from 'react';
import ImageItem from "./imageItem"
class itemketdoi extends Component {
    state = {
        listItem: this.props.state.listItemMatch
    }
    render() {
        return (
            <div className="col-12 my-2 animated fadeIn row d-flex justify-content-between">
                {
                   Array.from(this.state.listItem).map((item,index)=>{
                      return  <ImageItem key={index} user={item} />
                   })
                }
            </div>
        );
    }
}

export default itemketdoi;