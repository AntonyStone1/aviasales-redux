import store from 'store/store'
import actionTypes from 'store/actionTypes/actionTypes'

async function filterDataTwo(dispatch) {
  dispatch({
    type: actionTypes.FILTER_DATA_TWO,
    payload: store.getState()?.staticTicketData,
  })
  console.log(store.getState())
}
export default filterDataTwo
