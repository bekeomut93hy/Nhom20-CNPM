import React, { Component } from 'react';
import LeftSide from "../components/chatpage/headsetting"
import RightSide from "../components/chatpage/rightSide"
import { BrowserRouter as Router, withRouter } from "react-router-dom"
import Axios from 'axios';
import "../css/chatpage.css"
class chatpage extends Component {
    state = {
        _id: '',
        name: '',
        email: '',
        contact: '',
        avatarUrl: '',
        age: '',
        rangeAge: '',
        introduce: '',
        school: '',
        verify: null,
        usergender: '',
        gender: null,
        infoModeMess: null,
        listItemMatch: null,
    }
    async componentWillMount() {
        await Axios({
            url: "http://localhost:3001/auth/getId",
            withCredentials: true,
            method: "get",
        }).then(async (res) => {
            const current = new Date().getFullYear();
            const birth = new Date(res.data.user.birthday).getFullYear();
            await this.setState({
                _id: res.data.user._id,
                verify: res.data.user.verify,
                name: res.data.user.name,
                email: res.data.user.email,
                introduce: res.data.user.introduce,
                school: res.data.user.school,
                contact: res.data.user.contact,
                avatarUrl: res.data.user.avatarUrl,
                usergender: res.data.user.gender,
                gender: res.data.user.lookingGender,
                age: current - birth,
                rangeAge: res.data.user.rangeAge,
                
            });
        }).catch(err => {
            console.log(err);
        })
        await Axios({
            url: "http://localhost:3001/auth/getInfoPeople",
            withCredentials: true,
            method: "get",
        }).then(res => {
            this.setState({
                listItemMatch: JSON.parse(res.data)
            })
        }).catch(err => {
            console.log(err);
        })
    }
    _handleChangeAge = (e) => {
        this.setState({
            rangeAge: e.target.value
        })
    };
    _handleChangeGender = (gender) => {
        this.setState({
            gender: gender
        })
    }
    _handleLogout = () => {
        Axios({
            url: "http://localhost:3001/auth/logout",
            withCredentials: true,
            method: "get",
        }).then(async (res) => {
            await this.props.history.push("/");
        }).catch(err => {
            console.log(err);
        })
    };
    _handleInfoMode = (mode) => {
        this.setState({
            infoModeMess: mode
        })
    }
    _handleGoBack = async () => {
        await Axios({
            url: "http://localhost:3001/auth/updateSetting",
            withCredentials: true,
            method: "post",
            data: {
                rangeAge: this.state.rangeAge,
                lookingGender: this.state.gender
            }
        }).then(res => {
        }).catch(err => {
            console.log(err.message)
        })
        this.props.history.goBack();
    }
    render() {
        return (
            <div style={{ margin: "0", padding: "0" }} className="row">
                <Router>
                    <LeftSide
                        state={this.state}
                        handleChangeAge={this._handleChangeAge}
                        handleChangeGender={this._handleChangeGender}
                        handleGoBack={this._handleGoBack}
                        handleInfoMode={this._handleInfoMode}
                        handleLogout={this._handleLogout}
                    />
                    <RightSide
                        state={this.state}
                    />
                </Router>
            </div>
        );
    }
}

export default withRouter(chatpage);