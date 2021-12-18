/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import store from 'store/store'
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
    maxWidth: '950px',
    margin: '0 auto',
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
