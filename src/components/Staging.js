import React, { Component } from 'react'
import { connect } from 'react-redux'

class Staging extends Component {

    render() {
        const { fighters, cards } = this.props
        console.log(cards.filter(card=> card.active === true).length)
        return(
            <div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    fighters: state.data.fighters,
    cards: state.data.cards
})

export default connect(mapStateToProps, {})(Staging)