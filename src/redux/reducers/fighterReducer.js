import { QUEUE_FIGHTER, SETUP } from '../actions/types'

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
        case QUEUE_FIGHTER:
                return {
                    ...state,
                    cards: state.cards.map((card, index) => {
                    // Find the item with the matching id
                    if(card.index == action.payload) {
                      // Return a new object
                      return {
                        ...card,  // copy the existing item
                        active: !card.active  // replace the email addr
                      }
                    }
                
                    // Leave every other item unchanged
                    return card
                  }), 
                  fighters: state.fighters
            }
    }
}