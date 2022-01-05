/* eslint-disable import/no-cycle */
import initialState from 'store/initialState';
import ACTIONS from 'store/actionTypes/actionTypes';

function ticketReducer(state = initialState, action) {
  // eslint-disable-next-line global-require

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
