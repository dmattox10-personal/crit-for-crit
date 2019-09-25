import React, { Component } from 'react'

import CardImg from './CardImg'
import CardAvatar from './CardAvatar'
import CardTitle from './CardTitle'
import CardBio from './CardBio'
import { stat } from 'fs'

const cardContainerStyles = {
    width: "200px",
    height: "300px",
    background: "#fff",
    borderRadius: 35,
    boxShadow: "1px 1px 35px #444"
}

const cardBackStyles = {
    height: 300,
    width: 200,
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    margin: "auto",
    borderRadius: "35px",
    boxShadow: "1px 1px 35px #444",
    background: "')",
    backgroundSize: "cover",
    backgroundPosition: "right"
  }

  const cardBackImgStyles = {
    height: "100%",
    width: "100%",
    borderRadius: 35,
    position: "absolute"
  }



class Card extends Component {
    constructor(props){
      super(props)
      
    }

    render(){
      const { name, stats, id } = this.props
      return (
          <div className="flipperContainer">
            <div className="flipper">
                <div style={cardBackStyles} className="cardFront">
                <img className="cardBackImg" style={cardBackImgStyles} src={this.props.cardBackImgSrc}/>
              </div>
               <div style={cardContainerStyles} className="cardBack cardContainer">
                   <CardImg imgSrc={this.props.imgSrc} />
                   <CardAvatar avatarSrc={this.props.avatarSrc} />
                   <CardTitle title={ name } subTitle={ stats[stats.length - 1].Class.map(charClass => charClass.Name) } />
                   {/*<CardBio bio={this.state.bio} />*/}
               </div>
              
             </div>
        </div>
      )
    }
}

export default Card