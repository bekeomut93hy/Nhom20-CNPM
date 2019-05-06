import React, { Component } from 'react';
import ItemMes from "./itemmes"
import ItemKetdoi from "./itemketdoi"
class navbar extends Component {
    ChangeLoveMode = () => {
        const mode = false;
        this.props.changeMode(mode)
    };
    ChangeMessMode = () => {
        const mode = true;
        this.props.changeMode(mode)
    };
    render() {
        return (
            <div className="row animated fadeIn mt-3">
                <div className="col-12">
                    <ul className="nav nav-fill mr-2" style = {{fontWeight: "bold", cursor: "pointer", fontSize: "20px"}}>
                        <li onClick={this.ChangeLoveMode} className="nav-item hvr-underline-from-center" style = {{paddingLeft: "10px"}}>
                            <span > Kết đôi </span>
                        </li>
                        <li onClick={this.ChangeMessMode} className="nav-item hvr-underline-from-center ">
                            <span  > Tin nhắn</span>
                        </li>
                    </ul>
                </div>
                {
                    this.props.mode === false ? <ItemKetdoi state={this.props.state}/> : <ItemMes/>
                }
            </div>
        );
    }
}

export default navbar;