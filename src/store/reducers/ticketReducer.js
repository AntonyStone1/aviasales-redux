import initialState from 'store/initialState'
import ACTIONS from '../actionTypes/actionTypes'

function ticketReducer(state = initialState, action) {
  console.log('action', action)
  switch (action.type) {
    case ACTIONS.TICKET_DATA: {
      return { ...state, ticketsData: action.payload }
    }
    case ACTIONS.SORT_DATA_CHIP: {
      const currentState = action.payload
      console.log('curretn', currentState)
      return {
        ...state,
        ticketsData: currentState?.sort((a, b) => a.price - b.price),
      }
    }
    default:
      return state
  }
}
export default ticketReducer
