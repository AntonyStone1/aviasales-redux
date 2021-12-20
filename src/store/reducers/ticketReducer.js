/* eslint-disable import/no-cycle */
import initialState from 'store/initialState'
import ACTIONS from 'store/actionTypes/actionTypes'

function ticketReducer(state = initialState, action) {
  console.log('action', action)
  switch (action.type) {
    case ACTIONS.TICKET_DATA: {
      return {
        ...state,
        ticketsData: action.payload,
        staticTicketData: action.payload,
        isLoaded: action.isLoaded,
      }
    }
    case ACTIONS.SORT_DATA_PRICE: {
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
    case ACTIONS.SORT_DATA_OPTIMAL: {
      console.log(ACTIONS.SORT_DATA_OPTIMAL)
      const currentStateOptimal = action.payload.sort(
        (a, b) => a.price + a.segments[0].duration - (b.price + b.segments[0].duration),
      )
      console.log('curretnOptimal', currentStateOptimal)
      return {
        ...state,
        ticketsData: currentStateOptimal,
      }
    }
    case ACTIONS.FILTER_DATA_NO_TRANSFER: {
      console.log(ACTIONS.FILTER_DATA_THREE)
      const currentStateNoTransfer = action.payload.filter(
        (ticket) => ticket.segments[0].stops.length === 0,
      )
      const result = [...state.ticketsData, ...currentStateNoTransfer]
      console.log('curretnNO_TRANSFER', currentStateNoTransfer)
      return {
        ...state,
        ticketsData: result,
      }
    }
    case ACTIONS.FILTER_DATA_ONE: {
      console.log(ACTIONS.FILTER_DATA_ONE)
      const currentStateOne = action.payload.filter(
        (ticket) => ticket.segments[0].stops.length === 1,
      )
      const result = [...state.ticketsData, ...currentStateOne]
      return {
        ...state,
        ticketsData: result,
      }
    }
    case ACTIONS.FILTER_DATA_TWO: {
      console.log(ACTIONS.FILTER_DATA_TWO)
      const currentStateTwo = action.payload.filter(
        (ticket) => ticket.segments[0].stops.length === 2,
      )
      const result = [...state.ticketsData, ...currentStateTwo]
      console.log('curretnTwo', currentStateTwo)
      return {
        ...state,
        ticketsData: result,
      }
    }
    case ACTIONS.FILTER_DATA_THREE: {
      console.log(ACTIONS.FILTER_DATA_THREE)
      const currentStateThree = action.payload.filter(
        (ticket) => ticket.segments[0].stops.length === 3,
      )
      const result = [...state.ticketsData, ...currentStateThree]
      console.log('curretnThree', currentStateThree)
      return {
        ...state,
        ticketsData: result,
      }
    }
    case ACTIONS.FILTER_DATA_ALL: {
      return {
        ...state,
        ticketsData: action.payload,
      }
    }
    default:
      return state
  }
}
export default ticketReducer
