/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
import * as React from 'react'
import Checkbox from '@mui/material/Checkbox'
import { makeStyles } from '@mui/styles'
import { Typography } from '../../node_modules/@material-ui/core/index'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  checkboxHeading: {
    padding: '20px',
    textAlign: 'center',
  },
})

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

const CheckboxPanel = () => {
  const styles = useStyles()
  return (
    <>
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
    </>
  )
}

export default CheckboxPanel