import apiClient from 'src/utils/api/apiClient'
import { getKey } from 'src/utils/api/requests'
import PATHS from 'src/utils/api/Path'
import { ThunkDispatch } from 'redux-thunk'
import { IState } from 'src/types/IState'

interface Action {
  type: string
  payload: []
  isLoaded: boolean
}

async function getTicketData(dispatch: ThunkDispatch<IState, void, Action>) {
  const response = await getKey()
  const getData = () => apiClient.get(PATHS.getTicketsData + response.data.searchId)
  const data = await getData()
  dispatch({ type: 'TICKET_DATA', payload: data.data.tickets, isLoaded: true })
}

export default getTicketData
