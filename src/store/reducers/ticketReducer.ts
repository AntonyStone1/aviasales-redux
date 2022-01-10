import { IState } from 'src/types/IState'
import initialState from 'src/store/initialState'
import ACTIONS from 'src/store/actionTypes/actionTypes'
import { Action } from 'redux'

interface Actions extends Action {
  payload: []
  isLoaded: boolean
}

function ticketReducer(state: IState = initialState, action: Actions) {
  switch (action.type) {
    case ACTIONS.TICKET_DATA: {
      return {
        ...state,
        ticketsData: action.payload,
        isLoaded: action.isLoaded,
      }
    }

    default:
      return state
  }
}
export default ticketReducer
