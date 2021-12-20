import store from 'store/store'
import actionTypes from 'store/actionTypes/actionTypes'

async function sortDataPrice(dispatch) {
  console.log('check', store.getState()?.ticketsData)
  dispatch({
    type: actionTypes.SORT_DATA_PRICE,
    payload: store.getState()?.ticketsData,
  })
}
export default sortDataPrice
