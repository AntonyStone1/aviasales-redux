/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import store from 'store/store'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'
import { ReactComponent as Logo } from 'img/Logo.svg'
import CheckboxPanel from 'components/CheckboxPanel'
import TicketsList from 'components/TicketsList'
import getTicketsData from './store/action/getTicketsData'

const useStyles = makeStyles({
  appContainer: {
    display: 'flex !important',
    maxWidth: '800px',
    margin: '0 auto',
  },
  logoContainer: {
    borderRadius: '5px',
  },
  logo: {
    width: '100%',
    margin: '0 auto',
    marginBottom: '1.8%',
  },
})

function App() {
  const styles = useStyles()
  useEffect(() => {
    store.dispatch(getTicketsData)
  }, [])
  console.log('state', store.getState())
  console.log(1)
  return (
    <>
      <Box className={styles.logoContainer}>
        <Logo className={styles.logo} />
      </Box>
      <div className={styles.appContainer}>
        <CheckboxPanel />
        <TicketsList />
      </div>
    </>
  )
}

export default App
