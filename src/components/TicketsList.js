/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import Ticket from 'components/Ticket'
import SortRadioButtons from 'components/SortRadioButtons'
import { makeStyles } from '@mui/styles'
import store from 'store/store'
import { Container } from '../../node_modules/@material-ui/core/index'

const useStyles = makeStyles({
  container: {
    display: 'flex !important',
    flexDirection: 'column',
    width: '100% !important',
    marginBottom: '5%',
  },
})

function TicketsList({ ticketsData: { ticketsData } }) {
  const styles = useStyles()
  const { isLoaded } = store.getState()
  console.log(store.getState().isLoaded)
  console.log('store', store.getState())
  return (
    <Container className={styles.container}>
      <SortRadioButtons />
      {isLoaded &&
        ticketsData.map((ticket) => <Ticket key={Math.random(ticket.price)} ticketData={ticket} />)}
    </Container>
  )
}

export default connect((state) => ({ ticketsData: state }))(TicketsList)
