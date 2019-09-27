import { ADD_FIGHTER, QUEUE_FIGHTER, GET_CARDS, SETUP } from '../actions/types'

const initialState = {
    fighters: [],
    cards: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state
        case SETUP:
            return {
                ...state,
                cards: action.payload.cards,
                fighters: action.payload.fighters
            }
        case ADD_FIGHTER:
            return {
                ...state,
                fighters: action.payload
            }
        case QUEUE_FIGHTER:
            return {
                
            }
        case GET_CARDS:
            return {
                ...state,
                cards: action.payload
            }
    }
}