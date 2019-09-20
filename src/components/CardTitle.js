import React, { Component } from 'react'

const titleStyles = {
    color:"#555",
    fontWeight: "100",
    outline: "none",
    margin: "0px",
    display: "inline-block",
    width: "100%",
    textAlign: "center",
    position: "relative",
    top: "-75px"
  }
  const subTitleStyles = {
    position: "relative",
    top: "-95px",
    textAlign: "center",
    fontWeight: "100",
    color: "#888"
  }
  
class CardTitle extends React.Component {
    constructor(props){
      super(props);
    }
    render(){
      return (
        <div className="titleDiv">
          <h1 id={this.props.targetId} style={titleStyles} className="card-title">{this.props.title}</h1>
          <h4 style={subTitleStyles} className="subTitle">{this.props.subTitle}</h4>
        </div>
      )
    }
  }

  export default CardTitle