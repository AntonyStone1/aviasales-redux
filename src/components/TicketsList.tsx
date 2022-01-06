import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import SortRadioButtons from 'src/components/SortRadioButtons'
import filterTickets from 'src/components/filterTickets'
import sortTickets from 'src/components/sortTickets'
import parseParams from 'src/helpers/parseParams'
import { makeStyles } from '@mui/styles'
import store from 'src/store/store'
import TicketsListPgnBtn from 'src/components/Pagination/TicketsListPagBtn'
import { useLocation } from 'react-router-dom'
import { Container } from '@material-ui/core'
import Ticket from './Ticket'

interface Segment {
  date: string
  duration: number | any
  destination: number
  origin: string
  stops: string[]
}
interface TicketsDataArr {
  ticket: number
  price: number
  segments: Segment[]
  stops: Array<string>
}
interface TicketsData {
  ticketsData: TicketsDataArr[]
}
interface Props {
  ticketsData: TicketsData
}

const useStyles = makeStyles({
  container: {
    display: 'flex !important',
    flexDirection: 'column',
    width: '70% !important',
    margin: '0 !important',
    marginBottom: '5%',
    paddingRight: '0 !important',
    paddingLeft: '0 !important',
  },
})

function TicketsList({ ticketsData: { ticketsData } }: Props) {
  console.log(ticketsData)
  const { isLoaded } = store.getState()
  const [filteredTicketsData, setTicketsData] = useState(isLoaded ? ticketsData : [])
  const [paginationStep, SetPaginationStep] = useState(5)
  const styles = useStyles()
  const searchStr = useLocation().search
  const searchParams = new URLSearchParams(searchStr)
  useEffect(() => {
    setTicketsData(ticketsData)
    if (ticketsData.length > 0) {
      if (searchParams.has('sort') || searchParams.has('transfers')) {
        setTicketsData(
          sortTickets(
            parseParams(searchStr, {}, 'sort'),
            filterTickets(parseParams(searchStr, {}, 'transfers'), ticketsData),
          ),
        )
      }
    }
  }, [isLoaded])
  useEffect(() => {
    if (filteredTicketsData.length > 0) {
      setTicketsData(
        sortTickets(
          parseParams(searchStr, {}, 'sort'),
          filterTickets(parseParams(searchStr, {}, 'transfers'), ticketsData),
        ),
      )
    }
  }, [searchStr])

  const clickHandler = () => SetPaginationStep((prev) => prev + 5)
  return (
    <Container className={styles.container}>
      <SortRadioButtons />
      {isLoaded &&
        filteredTicketsData?.length > 0 &&
        filteredTicketsData?.map((ticket, index) => {
          if (index < paginationStep) {
            return <Ticket key={Math.random() * ticket.price} ticketData={ticket} />
          }
          return null
        })}
      <Container>
        <TicketsListPgnBtn clickHandler={clickHandler} />
      </Container>
    </Container>
  )
}

export default connect((state) => ({ ticketsData: state }))(TicketsList)
