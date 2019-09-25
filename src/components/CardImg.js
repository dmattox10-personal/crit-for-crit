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
    
    render(){
      const { name } = this.props
      return (
         <div style={imgContainerStyles} className="imgContainer">
              <img src={this.props.imgSrc} className="img" style={imgStyles} alt={ 'Header image above avatar of Character ' + name }/>
         </div>
      )
    }
  }

  export default CardImg