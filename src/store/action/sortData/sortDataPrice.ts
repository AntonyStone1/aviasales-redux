import store from 'src/store/store'
import actionTypes from 'src/store/actionTypes/actionTypes'
import { Dispatch } from 'redux'

async function sortDataPrice(dispatch: Dispatch) {
  dispatch({
    type: actionTypes.SORT_DATA_PRICE,
    payload: store.getState()?.ticketsData,
  })
}
export default sortDataPrice
