/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import store from 'store/store'
import { connect } from 'react-redux'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'
import { ReactComponent as Logo } from 'img/Logo.svg'
import CheckboxPanel from 'components/CheckboxPanel'
import TicketsList from 'components/TicketsList'
import { Container } from '../node_modules/@material-ui/core/index'
import getTicketsData from './store/action/getTicketsData'

const useStyles = makeStyles({
  appContainer: {
    display: 'flex !important',
  },
  logoContainer: {
    borderRadius: '5px',
  },
  logo: {
    width: '100%',
    margin: '0 auto',
  },
})

function App() {
  const styles = useStyles()
  useEffect(() => {
    store.dispatch(getTicketsData)
  }, [])
  return (
    <Container>
      <Box className={styles.logoContainer}>
        <Logo className={styles.logo} />
      </Box>
      <Container className={styles.appContainer}>
        <CheckboxPanel />
        <TicketsList />
      </Container>
    </Container>
  )
}

export default App
