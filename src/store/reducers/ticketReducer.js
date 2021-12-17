import initialState from 'store/initialState'
import ACTIONS from '../actionTypes/actionTypes'

function ticketReducer(state = initialState, action) {
  console.log('action', action)
  switch (action.type) {
    case ACTIONS.TICKET_DATA: {
      return { ...state, ticketsData: action.payload, isLoaded: action.isLoaded }
    }
    case ACTIONS.SORT_DATA_CHIP: {
      const currentStatePrice = action.payload.sort((a, b) => a.price - b.price)
      console.log('curretnCHIP', currentStatePrice)
      return {
        ...state,
        ticketsData: currentStatePrice,
      }
    }
    case ACTIONS.SORT_DATA_FAST: {
      const currentStateFast = action.payload.sort(
        (a, b) => a.segments[0].duration - b.segments[0].duration,
      )
      console.log('curretnFast', currentStateFast)
      return {
        ...state,
        ticketsData: currentStateFast,
      }
    }
    default:
      return state
  }
}
export default ticketReducer
