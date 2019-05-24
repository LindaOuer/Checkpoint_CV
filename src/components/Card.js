import React, { Component } from "react";
import { loc, cal } from "../images";

class Card extends Component {
  render() {
    const Card = {
      display: "flex",
      flexDirection: "column"
    };

    const CardInfo = {
      display: "flex",
      fontSize: "14px"
    };

    const CardLeft = {
      float: "left",
      width: "50%",
      paddingLeft: "10px"
    };

    const CardRight = {
      float: "right",
      width: "30%",
      paddingLeft: "10px"
    };

    const CardContent = {
      textAlign: "left",
      fontSize: "15px"
    };

    const logo = {
      width: "1.5rem",
      height: "1.5rem"
    };

    let items = "";
    if (this.props.List === "") {
      items = "";
    } else {
      items = this.props.List.map(item => <li>{item.content}</li>);
    }

    return (
      <div className="Card" style={Card}>
        <h4 className="Card-Title">{this.props.title}</h4>
        <div className="Card-Info" style={CardInfo}>
          <div className="Card-Left" style={CardLeft}>
            <img src={cal} alt="" style={logo} /> {this.props.date}
          </div>
          <div className="Card-Right" style={CardRight}>
            <img src={loc} alt="" style={logo} />
            {this.props.loc}
          </div>
        </div>
        <div className="Card-Content" style={CardContent}>
          <p>{this.props.content}</p>
          <ul>{items}</ul>
        </div>
        <hr width="15%" />
      </div>
    );
  }
}

export default Card;
