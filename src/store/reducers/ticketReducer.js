import initialState from 'store/initialState'
import ACTIONS from '../actionTypes/actionTypes'

function ticketReducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case ACTIONS.TICKET_DATA: {
      return { ...state, ticketsData: action.payload }
    }
    default:
      return state
  }
}
export default ticketReducer
