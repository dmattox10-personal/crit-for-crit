import React, { Component } from 'react'

import CardImg from './CardImg'
import CardAvatar from './CardAvatar'
import CardTitle from './CardTitle'
import CardBio from './CardBio'

const cardContainerStyles = {
    width: "200px",
    height: "340px",
    background: "#fff",
    borderRadius: 35,
    boxShadow: "1px 1px 35px #444"
}

const cardBackStyles = {
    height: 340,
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
      super(props);
      this.state = {
        title : "Jake Sully",
        subTitle: "@Na'vi_4_Lyf",
        bio: "Sick of doctors telling me what I couldn't do. I was a marine. A warrior... of the uh... Jarhead Clan. My cup is empty.",
        direction: "forwards"
      }
    }
    componentWillMount(){
      if (this.props.type == "wick"){
      this.setState({
        title: "John Wick",
        subTitle: "@HighOctane",
        bio: "People keep asking if I'm back and I haven't really had an answer. But now, yeah, I'm thinkin' I'm back."
      });
      } else if (this.props.type == "groot"){
        this.setState({
          title: "Groot",
          subTitle: "@iAmGroot",
          bio: "I am Groot. I am Groot... I am Groot, I am Groot, I am Groot I am Groot. I am Groot. I am Groot. I am Groot."
        })
      } else if (this.props.type == "hitgirl"){
        this.setState({
          title: "Mindy Mcready",
          subTitle: "@HitGirl",
          bio: "I can't see through walls but I can kick your ass. I think some tasers look gay. Robin wishes he was me."
        })
      }
    }
    render(){
      
      return (
          <div className="flipperContainer">
            <div className="flipper">
                <div style={cardBackStyles} className="cardFront">
                <img className="cardBackImg" style={cardBackImgStyles} src={this.props.cardBackImgSrc}/>
              </div>
               <div style={cardContainerStyles} className="cardBack cardContainer">
                   <CardImg imgSrc={this.props.imgSrc} />
                   <CardAvatar avatarSrc={this.props.avatarSrc} />
                   <CardTitle targetId={this.props.targetId} title={this.state.title} subTitle={this.state.subTitle} />
                   <CardBio bio={this.state.bio} />
               </div>
              
             </div>
        </div>
      )
    }
}

export default Card