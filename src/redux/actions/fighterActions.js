import { QUEUE_FIGHTER, SETUP } from './types'
const fighters = require('../../data/array.json')
const cards = require('../../data/cards.json')

export const queueFighter = (id) => dispatch => {
    dispatch({
        type: QUEUE_FIGHTER,
        payload: id
    })
}

export const setup = () => dispatch => {
    dispatch({
        type: SETUP,
        payload: {cards, fighters}
    })
}