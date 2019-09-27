import React, { Component } from 'react'
import { connect } from 'react-redux'
import { queueFighter, setup } from '../redux/actions/fighterActions'

import Card from './Card'
import List from './List'

const bodyStyles = {
    background: "-webkit-gradient(linear, left top, right top, color-stop(0%, transparent), color-stop(50%,red), color-stop(100%,transparent))",
    background: "-webkit-linear-gradient(left, transparent 0%,red 50%,transparent 100%)", /* Chrome10+, Safari5.1+ */
    background: "-moz-linear-gradient(left, transparent 0%,red 50%,transparent 100%)",    /* FF3.6+ */
    background: "linear-gradient(to bottom right,#ff5555 40%,#5555ff 100%)",
    width: "100%",
    height: "100vh",
    overflowX: "hidden"
  }
const headerStyles = {
    textAlign: "center",
    color:"#fff",
}

class CardContainer extends Component {
  /*
    constructor(props){
      super(props)
      this.state = {
        fighters: props.fighters,
        cards: [
          {
            active: false,
            index: '0'
          },
          {
            active: false,
            index: '1'
          },
          {
            active: false,
            index: '2'
          },
          {
            active: false,
            index: '3'
          },
          {
            active: false,
            index: '4'
          },
          {
            active: false,
            index: '5'
          },
          {
            active: false,
            index: '6'
          }
        ],
      }
    }
    */
    componentWillMount() {
      this.props.setup()
    }

    render(){
      //const { fighters, cards } = this.state
      const { fighters, cards } = this.props
      //const { cards } = this.props.cards
      //const { cards } = this.props.cards
      return (
       <div style={bodyStyles} className="body">
          <h1 style={headerStyles} className="header"></h1>
          <section className='grid'>
            <aside className='aspect-ratio'></aside>
            <article>
              <ul className='grid absolute-fill'>
                { fighters.map((fighter, id) => 
                <div onClick={() => this.props.queueFighter(id)}
                /*onClick={() => {
                cards[id].active = !cards[id].active
                this.setState({
                  cards
                })
                }
                }*/ key={ id }>
                <Card imgSrc={'./images/headers/placeholder.gif'} avatarSrc={'./images/avatars/' + fighter.Name + '.jpg'} cardBackImgSrc={'./images/backs/' + fighter.Name + '.jpg' } name={ fighter.Full } race={ fighter.Race } key={ id } id={ id } stats={ fighter.Stats } selected={ cards[id].active } />
                </div>  
                  )}
              </ul>
            </article>
          </section>
       </div>
      )
    }
  }

const mapStateToProps = (state) => ({
    fighters: state.data.fighters,
    cards: state.data.cards
})

//export default CardContainer
export default connect(mapStateToProps, { queueFighter, setup })(CardContainer)