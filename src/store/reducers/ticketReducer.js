/* eslint-disable import/no-cycle */
import initialState from 'store/initialState'
import ACTIONS from 'store/actionTypes/actionTypes'

function ticketReducer(state = initialState, action) {
  // eslint-disable-next-line global-require
  const _ = require('lodash')
  // console.log('ActiveState', state)
  // console.log('action', action)
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
      return {
        ...state,
        ticketsData: currentStatePrice,
      }
    }
    case ACTIONS.SORT_DATA_FAST: {
      const currentStateFast = action.payload.sort(
        (a, b) => a.segments[0].duration - b.segments[0].duration,
      )
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
      return {
        ...state,
        ticketsData: currentStateOptimal,
      }
    }
    case ACTIONS.FILTER_DATA_NO_TRANSFER: {
      console.log(ACTIONS.FILTER_DATA_THREE)
      const currentState = action.payload.filter((ticket) => ticket.segments[0].stops.length === 0)
      if (!state.isChecked) {
        console.log(11)
        return {
          ...state,
          ticketsData: currentState,
          isChecked: true,
        }
      }
      console.log(1)
      const result = _.cloneDeep(currentState, state.ticketsData)
      return {
        ...state,
        ticketsData: result,
      }
    }
    case ACTIONS.FILTER_DATA_ONE: {
      // console.log(ACTIONS.FILTER_DATA_ONE)
      const currentState = action.payload.filter((ticket) => ticket.segments[0].stops.length === 1)
      if (!state.isChecked) {
        console.log(22)
        return {
          ...state,
          ticketsData: currentState,
          isChecked: true,
        }
      }
      console.log(2)
      const result = _.cloneDeep(currentState, state.ticketsData)
      return {
        ...state,
        ticketsData: result,
      }
    }
    case ACTIONS.FILTER_DATA_TWO: {
      // console.log(ACTIONS.FILTER_DATA_TWO)
      const currentState = action.payload.filter((ticket) => ticket.segments[0].stops.length === 2)
      if (!state.isChecked) {
        console.log(33)
        return {
          ...state,
          ticketsData: currentState,
          isChecked: true,
        }
      }
      console.log(3)
      const result = _.cloneDeep(currentState, state.ticketsData)
      return {
        ...state,
        ticketsData: result,
      }
    }
    case ACTIONS.FILTER_DATA_THREE: {
      // console.log(ACTIONS.FILTER_DATA_THREE)
      const currentState = action.payload.filter((ticket) => ticket.segments[0].stops.length === 3)
      if (!state.isChecked) {
        console.log(44)
        return {
          ...state,
          ticketsData: currentState,
          isChecked: true,
        }
      }
      console.log(4)
      const result = _.cloneDeep(currentState, state.ticketsData)
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
