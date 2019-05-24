import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";

class Competence extends Component {
  render() {
    const Comp = {
      display: "flex",
      fontSize: "14px"
    };

    const CompLeft = {
      float: "left",
      width: "30%",
      paddingLeft: "10px"
    };

    const CompRight = {
      float: "right",
      width: "60%",
      paddingLeft: "10px"
    };
    return (
      <div style={Comp}>
        <div style={CompLeft}>
          <p>{this.props.title}</p>
        </div>
        <div style={CompRight}>
          <ProgressBar striped variant="dark" now={this.props.percent} />
        </div>
      </div>
    );
  }
}

export default Competence;
