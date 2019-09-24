import React, { Component } from 'react'

const imgContainerStyles = {
    backgroundColor:"#fff",
    height: "35%",
    margin: 0,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    background: "#444",
    backgroundSize: "cover"
  }
  const imgStyles = {
    width: 200,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35
  }

class CardImg extends Component {
    constructor(props){
      super(props);
    }
    render(){
      return (
         <div style={imgContainerStyles} className="imgContainer">
              <img src={this.props.imgSrc} className="img" style={imgStyles} />
         </div>
      )
    }
  }

  export default CardImg