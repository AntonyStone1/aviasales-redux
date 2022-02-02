export interface ISegment {
  date: string
  duration: number
  destination: string
  origin: string
  stops: string[]
}

export interface TicketData {
  price: number
  carrier: string
  segments: ISegment[]
}
