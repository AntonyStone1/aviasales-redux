import store from 'src/store/store';
import actionTypes from 'src/store/actionTypes/actionTypes';

async function sortDataOptimal(dispatch: any) {
  dispatch({
    type: actionTypes.SORT_DATA_OPTIMAL,
    payload: store.getState()?.ticketsData,
  });
}
export default sortDataOptimal;
