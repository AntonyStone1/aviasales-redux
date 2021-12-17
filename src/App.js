/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import store from 'store/store'
import { connect } from 'react-redux'
import Ticket from 'components/Ticket'
import SortButtons from 'components/SortButtons'
import SortRadioButtons from 'components/SortRadioButtons'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'
import { ReactComponent as Logo } from 'img/aviasalesLogo/Logo.svg'
import CheckboxPanel from 'components/CheckboxPanel'
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
  container: {
    display: 'flex !important',
    flexDirection: 'column',
    // justifyContent: 'center',
    width: '100% !important',
    marginBottom: '5%',
  },
  checkboxContainer: {
    width: '40% !important',
    borderRadius: '5px',
  },
  checkboxPanel: {
    backgroundColor: '#fff',
    paddingBottom: '10px',
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
      <Box className={styles.logoContainer}>
        <Logo className={styles.logo} />
      </Box>
      <Container className={styles.appContainer}>
        <Container className={styles.checkboxContainer}>
          <Box sx={{ boxShadow: 3 }} className={styles.checkboxPanel}>
            <CheckboxPanel />
          </Box>
        </Container>
        <Container className={styles.container}>
          <SortRadioButtons />
          {/* <SortButtons className={styles.sortBtns} /> */}
          {store.getState().ticketsData?.tickets?.map((ticket, index) => (
            <Ticket key={index} ticketData={ticket} />
          ))}
        </Container>
      </Container>
    </Container>
  )
}

export default connect((state) => ({ something: state.ticketsData }))(App)
