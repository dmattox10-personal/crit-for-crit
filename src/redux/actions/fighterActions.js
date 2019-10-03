import { QUEUE_FIGHTER, SETUP, STAGE_FIGHTERS } from './types'
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

export const stageFighters = () => dispatch => {
    dispatch({
        type: STAGE_FIGHTERS,
        payload: {cards, fighters}
    })
}