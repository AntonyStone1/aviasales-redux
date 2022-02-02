import { ThunkDispatch } from 'redux-thunk'
import apiClient from 'src/utils/api/apiClient'
import { getKey } from 'src/utils/api/requests'
import PATHS from 'src/utils/api/Path'
import { Action } from 'redux'
import { IState } from 'src/types/IState'

interface Actions extends Action {
  payload: []
  isLoaded: boolean
}

async function getTicketData(
  dispatch: ThunkDispatch<IState, void, Actions> | (() => Promise<any>),
) {
  const response = await getKey()
  const getData = () => apiClient.get(PATHS.getTicketsData + response.data.searchId)
  const { data } = await getData()
  dispatch<any>({ type: 'TICKET_DATA', payload: data.tickets, isLoaded: true })
}

export default getTicketData
