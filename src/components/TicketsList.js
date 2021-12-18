/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { connect } from 'react-redux'
import Ticket from 'components/Ticket'
import SortRadioButtons from 'components/SortRadioButtons'
import { makeStyles } from '@mui/styles'
import store from 'store/store'
import TicketsListPgnBtn from 'components/Pagination/TicketsListPagBtn'
import { Container } from '../../node_modules/@material-ui/core/index'

const useStyles = makeStyles({
  container: {
    display: 'flex !important',
    flexDirection: 'column',
    width: '100% !important',
    marginBottom: '5%',
    paddingRight: '0 !important',
    paddingLeft: '0 !important',
  },
})

function TicketsList({ ticketsData: { ticketsData } }) {
  const [paginationStep, SetPaginationStep] = useState(5)
  const styles = useStyles()
  const { isLoaded } = store.getState()

  const clickHandler = () => SetPaginationStep((prev) => prev + 5)
  return (
    <Container className={styles.container}>
      <SortRadioButtons />
      {isLoaded &&
        ticketsData.map((ticket, index) => {
          if (index < paginationStep) {
            return <Ticket key={Math.random(ticket.price)} ticketData={ticket} />
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
