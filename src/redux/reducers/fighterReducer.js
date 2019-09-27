import { ADD_FIGHTER, QUEUE_FIGHTER } from '../actions/types'

const initialState = {
    fighters: [],
    cards: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state
        case ADD_FIGHTER:
            return {
                ...state,
                fighters: action.fighters
            }
        case QUEUE_FIGHTER:

        break
    }
}