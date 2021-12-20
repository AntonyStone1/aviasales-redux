import store from 'store/store'
import actionTypes from 'store/actionTypes/actionTypes'

async function filterDataThree(dispatch) {
  dispatch({
    type: actionTypes.FILTER_DATA_THREE,
    payload: store.getState()?.staticTicketData,
  })
  console.log(store.getState())
}
export default filterDataThree
