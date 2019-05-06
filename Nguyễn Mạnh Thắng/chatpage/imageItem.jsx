import React, { Component } from 'react';

class imageItem extends Component {
    render() {
        const styleImage = {
            height : "15vh",
            background: `url(${this.props.user.avatarUrl[0]})
            no-repeat center center fixed`,
            backgroundSize: "cover",
        }
        const styleP = {
            position : "absolute",
            bottom : "-10px",
            left : "2px",
            color : "white",
            fontWeight : "bold"
        }
        return (
            <div style={styleImage} className="col-3 mx-4 hvr-grow">
                <p style={styleP}> {this.props.user.name}</p>
            </div>
        );
    }
}

export default imageItem;