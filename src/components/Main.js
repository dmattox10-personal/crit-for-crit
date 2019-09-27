import React, { Component } from 'react'
//import { connect } from 'react-redux'
//import { addFighter } from '../redux/actions/fighterActions'
import CardContainer from './CardContainer'

//const fighters = require('../data/array.json')

class Main extends Component {
    /*
    constructor() {
        super()
        this.state = {
            fighters: []
        }
    }
    */
   /*
    componentWillMount() {
        this.setState({
            fighters: fighters
        })
    }
    */
   /*
   componentWillMount() {
       this.props.addFighter()
   }
   */
    render() {
        //const { fighters } = this.props.fighters
        return (
            <div>
                {/*<CardContainer fighters={ fighters }/>*/}
                <CardContainer />
            </div>
        )
    }
}
/*
const mapStateToProps = (state) => ({
    fighters: state.fighters
})
*/

//export default connect(mapStateToProps, { addFighter })(Main)
export default Main