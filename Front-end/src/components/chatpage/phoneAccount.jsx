import React, { Component } from 'react';
class phoneAccount extends Component {
    _handleVerify = ()=>{
        console.log("alo");
    }
    render() {
        return (
            <div className="animated slideInLeft delay-0.5s faster row">
                <div className="col-12 mt-3 ml-3" style = {{color: "red"}}>
                    <h5> Số điện thoại</h5>
                </div>
                <div className="col-12">
                    <div className="row align-items-baseline">
                        <div className="col-12 ml-3 mt-2 " style={{cursor : "pointer"}}>
                            <h5>+{this.props.state.contact || "Thêm số điện thoại"}</h5>
                        </div>
                        {/* <div className="col-2 ml-auto">
                            <h3>
                                {
                                    this.props.state.verify === true ? <i className="fa fa-check-circle text-success"></i> : <i class="fa fa-times-circle text-danger"></i>
                                }
                            </h3>
                        </div> */}
                    </div>
                </div>
                <div onClick={this._handleVerify} className="col-12">
                    <div className="row mt-2">
                        <div className="col-2 mx-3">
                            <h5 style = {{fontSize: "30px", color: "blue"}}><i class="fa fa-phone"></i></h5>
                        </div>
                        <div className= "mt-1">
                            <h5 className="hvr-bounce-in" style = {{cursor: "pointer"}}> Thay đổi số điện thoại</h5>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default phoneAccount;