import apiClient from 'utils/api/apiClient.ts'
import { getKey } from 'utils/api/requests.tsx'
import PATHS from 'utils/api/Path.tsx'

async function getTicketData(dispatch) {
  const response = await getKey()
  const getData = () => apiClient.get(PATHS.getTicketsData + response.data.searchId)
  const data = await getData()
  dispatch({ type: 'TICKET_DATA', payload: data.data.tickets, isLoaded: true })
}
export default getTicketData
