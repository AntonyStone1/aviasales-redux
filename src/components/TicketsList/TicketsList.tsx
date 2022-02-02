/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles'
import { useLocation } from 'react-router-dom'
import { Container, CircularProgress } from '@material-ui/core'
import filterTickets from '../CheckboxPanel/filterTickets'
import sortTickets from '../SortRadioButtons/sortTickets'
import parseParams from '../../helpers/parseParams'
import store from '../../store/store'
import TicketsListPgnBtn from '../Pagination/TicketsListPagBtn'
import { TicketData } from '../../types/TicketsData'
import SortRadioButtons from '../SortRadioButtons/SortRadioButtons'
import Ticket from '../Ticket/Ticket'

interface TicketsData {
  ticketsData: TicketData[]
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

const TicketsList: React.FC<TicketsData> = ({ ticketsData }) => {
  const { isLoaded } = store.getState()
  const [filteredTicketsData, setTicketsData] = useState(isLoaded ? ticketsData : [])
  const [paginationStep, SetPaginationStep] = useState(5)
  const styles = useStyles()
  const searchStr = useLocation().search
  const searchParams = new URLSearchParams(searchStr)

  useEffect(() => {
    setTicketsData(ticketsData)
    if (ticketsData?.length > 0) {
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
    if (filteredTicketsData?.length > 0) {
      setTicketsData(
        sortTickets(
          parseParams(searchStr, {}, 'sort'),
          filterTickets(parseParams(searchStr, {}, 'transfers'), ticketsData),
        ),
      )
    }
  }, [searchStr])

  const clickHandler = () => SetPaginationStep((prev) => prev + 5)
  console.log(ticketsData)

  return (
    <Container className={styles.container}>
      <SortRadioButtons />
      {isLoaded ? (
        filteredTicketsData?.map((ticket, index: number) => {
          if (index < paginationStep) {
            return <Ticket key={Math.random() * ticket.price} ticketData={ticket} />
          }
          return null
        })
      ) : (
        <CircularProgress style={{ margin: 'auto', marginBottom: '30px' }} />
      )}
      <Container>
        <TicketsListPgnBtn clickHandler={clickHandler} />
      </Container>
    </Container>
  )
}

export default TicketsList
