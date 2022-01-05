import initialState from 'src/store/initialState';
import ACTIONS from 'src/store/actionTypes/actionTypes';

function ticketReducer(state = initialState, action: any) {
  switch (action.type) {
    case ACTIONS.TICKET_DATA: {
      return {
        ...state,
        ticketsData: action.payload,
        staticTicketData: action.payload,
        isLoaded: action.isLoaded,
      };
    }

    default:
      return state;
  }
}
export default ticketReducer;
