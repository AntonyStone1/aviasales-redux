/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
import React from 'react'
import filterDataOne from 'store/action/filterData/filterDataOne'
import filterDataTwo from 'store/action/filterData/filterDataTwo'
import filterDataThree from 'store/action/filterData/filterDataThree'
import filterDataAll from 'store/action/filterData/filterDataAll'
import filterDataNoTransfer from 'store/action/filterData/filterDataNoTransfer'
import store from 'store/store'
import Checkbox from '@mui/material/Checkbox'
import { makeStyles } from '@mui/styles'
import { Typography, Container, Box } from '../../node_modules/@material-ui/core/index'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  checkboxHeading: {
    fontStyle: 'normal !important',
    fontWeight: '600 !important',
    fontSize: '12px !important',
    lineHeight: '12px !important',
    marginBottom: '20px !important',
    textAlign: 'left',
    textTransform: 'uppercase',
  },
  checkboxContainer: {
    width: '33% !important',
    margin: '0 !important',
    paddingRight: '0 !important',
  },
  checkboxPanel: {
    height: '222px',
    backgroundColor: '#fff',
    padding: '20px 20px 10px 20px',
    borderRadius: '5px',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
  },
  checkbox: {
    padding: '0 !important',
    paddingBottom: '10px !important',
    paddingRight: '14px !important',
  },
})

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

const CheckboxPanel = () => {
  const styles = useStyles()

  const clickHandlerAll = () => {
    store.dispatch(filterDataAll)
  }
  const clickHandlerNoTransfer = () => {
    store.dispatch(filterDataNoTransfer)
  }
  const clickHandlerOne = () => {
    store.dispatch(filterDataOne)
  }
  const clickHandlerTwo = () => {
    store.dispatch(filterDataTwo)
  }
  const clickHandlerThree = () => {
    store.dispatch(filterDataThree)
  }

  return (
    <>
      <Container className={styles.checkboxContainer}>
        <Box className={styles.checkboxPanel}>
          <Typography variant="h6" className={styles.checkboxHeading}>
            Количество пересадок
          </Typography>
          <div className={styles.container}>
            <label htmlFor="all">
              <Checkbox
                {...label}
                name="ALL"
                id="all"
                className={styles.checkbox}
                onChange={clickHandlerAll}
              />
              Все
            </label>
            <label htmlFor="directFlight">
              <Checkbox
                {...label}
                id="directFlight"
                className={styles.checkbox}
                onChange={clickHandlerNoTransfer}
              />
              Без пересадок
            </label>
            <label htmlFor="1_dirrect">
              <Checkbox
                {...label}
                id="1_dirrect"
                onChange={clickHandlerOne}
                className={styles.checkbox}
                che
              />
              1 пересадка
            </label>
            <label htmlFor="2_dirrect">
              <Checkbox
                {...label}
                id="2_dirrect"
                className={styles.checkbox}
                onChange={clickHandlerTwo}
              />
              2 пересадки
            </label>
            <label htmlFor="3_dirrect">
              <Checkbox
                {...label}
                id="3_dirrect"
                className={styles.checkbox}
                onChange={clickHandlerThree}
              />
              3 пересадки
            </label>
          </div>
        </Box>
      </Container>
    </>
  )
}

export default CheckboxPanel
