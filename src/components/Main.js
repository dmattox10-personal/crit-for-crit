import React, { Component } from 'react'

import CardContainer from './CardContainer'

const fighters = require('../data/array.json')

class Main extends Component {
    constructor() {
        super()
        this.state = {
            fighters: []
        }
    }
    componentWillMount() {
        this.setState({
            fighters: fighters
        })
    }
    render() {
        const { fighters } = this.state
        return (
            <div>
                <CardContainer fighters={ fighters }/>
            </div>
        )
    }
}

export default Main