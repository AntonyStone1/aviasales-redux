import { IState } from 'src/types/IState'
import initialState from 'src/store/initialState'
import ACTIONS from 'src/store/actionTypes/actionTypes'

interface Action {
  type: string
  payload: []
  isLoaded: boolean
}

function ticketReducer(state: IState = initialState, action: Action) {
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
