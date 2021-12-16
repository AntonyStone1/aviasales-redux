import { getKey } from 'components/requests/requests'
import apiClient from '../../utils/apiClient'
import PATHS from '../../components/requests/Path'

async function getTicketData(dispatch) {
  const response = await getKey()
  const getData = () => apiClient.get(PATHS.getTicketsData + response.data.searchId)
  const data = await getData()
  dispatch({ type: 'TICKET_DATA', payload: data.data })
}
export default getTicketData
