import store from '../store'
import actionTypes from '../actionTypes/actionTypes'

async function sortDataFast(dispatch) {
  console.log('fast', store.getState()?.ticketsData)
  dispatch({
    type: actionTypes.SORT_DATA_FAST,
    payload: store.getState()?.ticketsData,
  })
}
export default sortDataFast
