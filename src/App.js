/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import store from 'store/store'
import { connect } from 'react-redux'
import Ticket from 'components/Ticket'
import SortButtons from 'components/SortButtons'
import { makeStyles } from '@mui/styles'
import { Container } from '../node_modules/@material-ui/core/index'
import getTicketsData from './store/action/getTicketsData'

const useStyles = makeStyles({
  container: {
    display: 'flex !important',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '55% !important',
    marginBottom: '5%',
  },
  sortBtns: {
    width: '100%',
  },
})

function App({ something }) {
  const styles = useStyles()
  useEffect(() => {
    store.dispatch(getTicketsData)
  }, [])
  console.log(store.getState())
  return (
    <Container>
      <Container>123</Container>
      <Container className={styles.container}>
        <SortButtons className={styles.sortBtns} />
        {store.getState().ticketsData?.tickets?.map((ticket, index) => (
          <Ticket key={index} ticketData={ticket} />
        ))}
      </Container>
    </Container>
  )
}

export default connect((state) => ({ something: state.ticketsData }))(App)
