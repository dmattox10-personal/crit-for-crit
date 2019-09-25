import React, { Component } from 'react'
import Card from './Card'

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
    constructor(props){
      super(props)
      this.state = {
        fighters: props.fighters,
        selected: [
          {
            active: false
          },
          {
            active: false
          },
          {
            active: false
          },
          {
            active: false
          },
          {
            active: false
          },
          {
            active: false
          },
          {
            active: false
          }
        ]
      }
      this.addFighter = this.addFighter.bind(this)
    }

    addFighter(id) {
      const fighters = this.state
      console.log(fighters[id].Name)
    }
    render(){
      const { fighters, selected } = this.state
      return (
       <div style={bodyStyles} className="body">
          <h1 style={headerStyles} className="header"></h1>

          <section className='grid'>
            <aside className='aspect-ratio'></aside>
            <article>
              <ul className='grid absolute-fill'>
                { fighters.map((fighter, id) => 
                <div onClick={() => {
                const { selected } = this.state
                selected[id].active = !selected[id].active
                this.setState({
                  selected
                })
                }
                } key={ id }>
                <Card imgSrc={'./images/headers/placeholder.gif'} avatarSrc={'./images/avatars/' + fighter.Name + '.jpg'} cardBackImgSrc={'./images/backs/' + fighter.Name + '.jpg' } name={ fighter.Full } race={ fighter.Race } key={ id } id={ id } stats={ fighter.Stats } selected={ selected[id].active }/>
                </div>  
                  )}
              </ul>
              
            </article>
            
          </section>
          
       </div>
      )
    }
  }

  export default CardContainer