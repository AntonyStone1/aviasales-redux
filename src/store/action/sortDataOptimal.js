import store from 'store/store'
import actionTypes from '../actionTypes/actionTypes'

async function sortDataOptimal(dispatch) {
  console.log('optimal', store.getState()?.ticketsData)
  console.log(actionTypes.SORT_DATA_OPTIMAL)
  dispatch({
    type: actionTypes.SORT_DATA_OPTIMAL,
    payload: store.getState()?.ticketsData,
  })
}
export default sortDataOptimal
