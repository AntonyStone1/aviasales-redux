import { TicketData } from './TicketsData'

export interface IState {
  searchId: string
  ticketsData: TicketData[]
  isLoaded: boolean
}
