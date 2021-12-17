import store from 'store/store'
import actionTypes from '../actionTypes/actionTypes'

async function SortDataPrice(dispatch) {
  dispatch({
    type: actionTypes.SORT_DATA_CHIP,
    payload: store.getState()?.ticketsData?.tickets,
  })
}
export default SortDataPrice
