import store from 'src/store/store';
import actionTypes from 'src/store/actionTypes/actionTypes';

async function sortDataPrice(dispatch: any) {
  dispatch({
    type: actionTypes.SORT_DATA_PRICE,
    payload: store.getState()?.ticketsData,
  });
}
export default sortDataPrice;
