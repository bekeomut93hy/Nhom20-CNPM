import React, { Component } from 'react';
import Info from "./info";
import LikeButton from './likebutton';
import CancelButton from "./cacelbutton";
import { Route } from "react-router-dom"
import Axios from 'axios';
class card extends Component {
    state = {
        listPeople: null,
        index: 0
    }
    async componentDidMount() {
        await Axios({
            url: "http://localhost:3001/auth/lookingPeople",
            withCredentials: true,
            method: "get",
        }).then(async res => {
            await this.setState({
                listPeople: JSON.parse(res.data)
            })
        }).catch(err => {
            console.log(err.message);
        })
    }
    _handleLike = async () => {
        await Axios({
            url: "http://localhost:3001/auth/addLikePeople",
            withCredentials: true,
            method: "post",
            data : {
                _id : this.state.listPeople[this.state.index]
            }
        }).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err.message);
        })
        await this.setState({
            index: this.state.index + 1
        })
    }
    _handleCancel = async () => {
        await this.setState({
            index: this.state.index + 1
        })
    
    }
    render() {
        const styleBorder = {
            border: "1px solid rgba(212, 205, 205,0.5)",
            borderRadius: "3%",
            overflow: "auto"
        }
        return (
            <div className="mx-auto my-auto">
                <Route path="/app/recs" render={() => {
                    return (
                        <div className="animated zoomIn " style={styleBorder} >
                            {
                                this.state.listPeople != null ? <div className="card" style={{ width: "18rem" }}>   
                                    <img src={this.state.listPeople[this.state.index].avatarUrl[0]} alt="" className="card-img-top" />
                                    <div className="card-body">
                                        <Info state={this.state.listPeople[this.state.index]} />
                                    </div>
                                </div> : null

                            }
                        </div>
                    )
                }} />

                <Route path="/app/profile" render={() => {
                    return (
                        <div className="animated zoomIn" style={styleBorder} >
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={this.props.state.avatarUrl} alt="" className="card-img-top" />
                                <div className="card-body">
                                    <Info state={this.props.state} />
                                </div>
                            </div>
                        </div>
                    )
                }} />
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