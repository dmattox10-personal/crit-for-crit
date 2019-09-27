import { ADD_FIGHTER, QUEUE_FIGHTER } from './types'
const fighters = require('../../data/array.json')

export const addFighter = () => dispatch => {
    //console.log('Populating...')
    console.log(fighters)
    dispatch({
        type: ADD_FIGHTER,
        fighters: fighters
    })
}

export function queueFighter() {
    return function(dispatch) {

    }
}