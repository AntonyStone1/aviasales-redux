import store from 'src/store/store'
import actionTypes from 'src/store/actionTypes/actionTypes'

async function sortDataFast(dispatch: any) {
  dispatch({
    type: actionTypes.SORT_DATA_FAST,
    payload: store.getState()?.ticketsData,
  })
}
export default sortDataFast
