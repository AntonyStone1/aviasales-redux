/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'
import { ReactComponent as Logo } from 'src/img/Logo.svg'
import { Switch, Route, Redirect } from 'react-router'
import getTicketsData from 'src/store/action/getTicketsData'
import { useDispatch, useSelector } from 'react-redux'
import TicketsList from './components/TicketsList/TicketsList'
import CheckboxPanel from './components/CheckboxPanel/CheckboxPanel'
import { IState } from './types/IState'

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
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTicketsData)
  }, [])
  const data = useSelector((state: IState) => state.ticketsData)

  return (
    <Switch>
      <Route exact path="/home">
        <Box className={styles.logoContainer}>
          <Logo className={styles.logo} />
        </Box>
        <div className={styles.appContainer}>
          <CheckboxPanel />
          <TicketsList ticketsData={data} />
        </div>
      </Route>
      <Redirect from="/*" to="/home" />
    </Switch>
  )
}

export default App
