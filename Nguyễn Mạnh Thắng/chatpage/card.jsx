import React, { Component } from 'react';
import Info from "./info";
import LikeButton from './likebutton';
import CancelButton from "./cacelbutton";
import { Route } from "react-router-dom"
class card extends Component {

    _handleLike = () => {
        console.log(this.props.state);
        console.log("like");
    }
    _handleCancel = () => {
        console.log("cancel");
    }
    _handleNext = () => {
        console.log("next");
    }
    render() {
        const styleBorder = {
            border: "1px solid rgba(212, 205, 205,0.5)",
            borderRadius: "3%",
            overflow: "auto"
        }
        const styleMenu = {
            borderRadius: '8px',
            boxShadow: "0 5px 13px 1px rgba(0,0,0,.09)",
            margin : "auto"
        }

        return (
            <div className="mx-auto my-auto" style = {{styleMenu}}>
                <div className="animated zoomIn mx-auto my-auto " style={styleBorder} >
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/57154679_2423803574508281_4295750169753812992_n.jpg?_nc_cat=111&_nc_oc=AQm0gC69kbKcysLkzdNY0dlnPpiTk3wifHsoNrOTn0OK517h7hjIzziBVkZaFxgXWSM&_nc_ht=scontent.fhan2-2.fna&oh=ad171a257393b005f8dbb0a8cdb058b5&oe=5D2F68EA" className="card-img-top" />
                        <div className="card-body">
                            <Info />
                        </div>
                    </div>

                </div>
                <Route path="/app/recs" render={() => {
                    return <div id="game-pad" className="d-flex justify-content-around animated rollIn align-items-center" style={{ padding: "10px" }}>
                        <LikeButton handleLike={this._handleLike} />
                        <CancelButton handleCancel={this._handleCancel} />
                    </div>
                }} />

            </div>



        );
    }
}
export default card;