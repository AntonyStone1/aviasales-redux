import store from 'src/store/store'
import actionTypes from 'src/store/actionTypes/actionTypes'
import { Dispatch } from 'redux'

async function sortDataOptimal(dispatch: Dispatch) {
  dispatch({
    type: actionTypes.SORT_DATA_OPTIMAL,
    payload: store.getState()?.ticketsData,
  })
}
export default sortDataOptimal
