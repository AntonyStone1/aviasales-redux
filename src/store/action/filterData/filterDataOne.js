import store from 'store/store'
import actionTypes from 'store/actionTypes/actionTypes'

async function filterDataOne(dispatch) {
  dispatch({
    type: actionTypes.FILTER_DATA_ONE,
    payload: store.getState()?.staticTicketData,
  })
  console.log(store.getState())
}
export default filterDataOne
