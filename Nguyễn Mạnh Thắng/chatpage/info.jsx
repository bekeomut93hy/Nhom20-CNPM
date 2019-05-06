import React, { Component } from 'react';

class Info extends Component {
    render() {
        const styleChu = {
            color: "Red",
            fontWeight: "bold",
            width: "100%",
            borderBottom: "1px solid rgba(212, 205, 205,0.5)",
            padding: "10px 5px",
        }
        const styleChu2 = {
            color: "Red",
            fontWeight: "bold",
            width: "100%",
            padding: "10px 5px",
        }
        const stylePhong = {
            background: "#fff",
        }
        return (
            <div style = {stylePhong}>
                <div style={styleChu}>
                    <div>
                        <div>
                            <h3 className="d-inline">Tài </h3>
                            <span className="pl-2"> 19</span>
                        </div>
                    </div>
                </div>
                <div  style={styleChu}>
                    <span>Đại học Công Nghệ</span>
                </div>
                <div  style={styleChu2}>
                    <span  >Thích nghe nhạc, xem phim, đọc sách </span>
                </div>
            </div>

        );
    }
}

export default Info;