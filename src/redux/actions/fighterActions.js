import { ADD_FIGHTER, QUEUE_FIGHTER, GET_CARDS, SETUP } from './types'
const fighters = require('../../data/array.json')
const cards = require('../../data/cards.json')

export const addFighter = () => dispatch => {
    //console.log('Populating...')
    dispatch({
        type: ADD_FIGHTER,
        payload: fighters
    })
}

export const queueFighter = (id) => dispatch => {
    dispatch({
        type: QUEUE_FIGHTER,
        payload: id
    })
}

export const getCards = () => dispatch => {
    dispatch({
        type: GET_CARDS,
        payload: cards
    })
}

export const setup = () => dispatch => {
    dispatch({
        type: SETUP,
        payload: cards, fighters
    })
}