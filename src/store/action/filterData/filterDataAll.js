import store from 'store/store'
import actionTypes from 'store/actionTypes/actionTypes'

async function filterDataAll(dispatch) {
  dispatch({
    type: actionTypes.FILTER_DATA_ALL,
    payload: store.getState()?.staticTicketData,
  })
  console.log(store.getState())
}
export default filterDataAll
