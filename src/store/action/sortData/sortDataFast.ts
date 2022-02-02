import store from 'src/store/store'
import actionTypes from 'src/store/actionTypes/actionTypes'
import { Dispatch } from 'redux'

async function sortDataFast(dispatch: Dispatch) {
  dispatch({
    type: actionTypes.SORT_DATA_FAST,
    payload: store.getState()?.ticketsData,
  })
}
export default sortDataFast
