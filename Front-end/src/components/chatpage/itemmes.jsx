import React, { Component } from 'react';

class itemmes extends Component {
   _handleClick=(evt)=>{
    const list = document.querySelectorAll(".item");
    for(let i=0;i<list.length;++i){
        list[i].classList.remove("choose");
    }
    document.getElementById(evt.target.id).classList.add("choose");
   }
    render() {
       const styleChat = {
            cursor: "pointer",
            padding: "15px 0px 15px 20px",
            background: "#ffffff",
            marginTop: "5px"
       }
       const stylePadding = {
           width: "100%"
       }
        return (
            <div className="animated zoomInDown mt-3 abc" style={stylePadding}>
            {
                this.props.state.listMessage ? Array.from(this.props.state.listMessage).map( (item,index)=>{
                   return <div onClick={this._handleClick} id={item.id} className="item" key={index}  style={styleChat}> {item.users[0]} </div>
                }) : null
            }
             
            </div>
        );
    }
}

export default itemmes;