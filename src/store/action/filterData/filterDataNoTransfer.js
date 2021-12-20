import store from 'store/store'
import actionTypes from 'store/actionTypes/actionTypes'

async function filterDataNoTratsfer(dispatch) {
  dispatch({
    type: actionTypes.FILTER_DATA_NO_TRANSFER,
    payload: store.getState()?.staticTicketData,
  })
  console.log(store.getState())
}
export default filterDataNoTratsfer
