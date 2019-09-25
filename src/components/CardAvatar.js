import React, { Component } from 'react'

const avatarContainerStyles = {
    width: "140px",
    height: "140px",
    zIndex: "9",
    position: "relative",
    top: "-85px",
    left: "28px",
    right: "0",
    margin: "0 auto",
    border: "4px solid #fff",
    background: "#000",
    backgroundSize: "cover",
    display: "inline-block",
    textAlign: "center",
    borderRadius: "50%"
  }
  const avatarImgStyles = {
    width: "100%",
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    margin: "auto",
    borderRadius: "50%"
  }
  
class CardAvatar extends React.Component {
    constructor(props){
      super(props);
    }
    render(){
      return (
        <div style={avatarContainerStyles} className="infoContainer">
          <img src={this.props.avatarSrc} style={avatarImgStyles} />
        </div>
      )
    }
  }

  export default CardAvatar