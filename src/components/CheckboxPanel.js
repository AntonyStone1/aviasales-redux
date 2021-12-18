/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
import * as React from 'react'
import Checkbox from '@mui/material/Checkbox'
import { makeStyles } from '@mui/styles'
import { Typography, Container, Box } from '../../node_modules/@material-ui/core/index'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  checkboxHeading: {
    padding: '20px',
    textAlign: 'center',
  },
  checkboxContainer: {
    width: '57% !important',
    paddingRight: '0 !important',
  },
  checkboxPanel: {
    backgroundColor: '#fff',
    paddingBottom: '10px',
    borderRadius: '5px',
    boxShadow:
      '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);',
  },
})

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

const CheckboxPanel = () => {
  const styles = useStyles()
  return (
    <>
      <Container className={styles.checkboxContainer}>
        <Box className={styles.checkboxPanel}>
          <Typography variant="h6" className={styles.checkboxHeading}>
            Количество пересадок
          </Typography>
          <div className={styles.container}>
            <label htmlFor="all">
              <Checkbox {...label} id="all" />
              Все
            </label>
            <label htmlFor="directFlight">
              <Checkbox {...label} id="directFlight" />
              Без пересадок
            </label>
            <label htmlFor="1_dirrect">
              <Checkbox {...label} id="1_dirrect" />1 пересадка
            </label>
            <label htmlFor="2_dirrect">
              <Checkbox {...label} id="2_dirrect" />2 пересадки
            </label>
            <label htmlFor="3_dirrect">
              <Checkbox {...label} id="3_dirrect" />3 пересадки
            </label>
          </div>
        </Box>
      </Container>
    </>
  )
}

export default CheckboxPanel
