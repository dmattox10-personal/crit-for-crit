import React, { Component } from 'react'

const bioContainerStyles = {
    position: "relative",
    top: "-95px"
  }
  const bioStyles = {
    color: "#444",
    padding: "0 30px",
    textAlign: "center"
  }
  
class CardBio extends React.Component {
    constructor(props){
      super(props);
    }
    render(){
      return (
        <div style={bioContainerStyles} className="bioContainer">
          <p style={bioStyles} className="bio">{this.props.bio}</p>
        </div>
      )
    }
  }

  export default CardBio