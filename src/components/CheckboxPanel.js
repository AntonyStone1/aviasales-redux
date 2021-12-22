/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react'
import Checkbox from '@mui/material/Checkbox'
import { makeStyles } from '@mui/styles'
import { Link, useHistory } from 'react-router-dom'
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
    padding: '25px 20px',
    paddingBottom: '10px',
    // marginBottom: '20px !important',
    textAlign: 'left',
    textTransform: 'uppercase',
  },
  checkboxContainer: {
    width: '33% !important',
    margin: '0 !important',
    paddingRight: '0 !important',
  },
  checkboxPanel: {
    height: '255px',
    backgroundColor: '#fff',
    // padding: '20px 20px 10px 20px',
    borderRadius: '5px',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
  },
  checkbox: {
    // padding: '0 !important',
    // padding: '10px 25px 10px 25px',
  },
  link: {
    color: '#4A4A4A',
    textDecoration: 'none',
  },
})

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

const CheckboxPanel = () => {
  const styles = useStyles()
  const history = useHistory()
  const [isFiltering, setFiltering] = useState(false)
  const [isChecked, setChecked] = useState({
    transferAll: false,
    noTransfer: false,
    transferOne: false,
    transferTwo: false,
    transferThree: false,
  })

  const checkCheckboxState = (state) => {
    let result = false
    // eslint-disable-next-line no-restricted-syntax
    for (const value of Object.values(state)) {
      if (value) {
        result = value
        return result
      }
    }
    return result
  }
  useEffect(() => setFiltering(checkCheckboxState(isChecked)), [isChecked])
  const createUrlFilterStr = (param) => {
    let result = '/home/transfers?'
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(isChecked)) {
      if (key === 'transferAll') {
        result += param === key ? `${key}=${!value}` : `${key}=${value}`
      } else {
        result += param === key ? `&${key}=${!value}` : `&${key}=${value}`
      }
    }
    return result
  }
  const clickHandle = (e) => {
    const url = createUrlFilterStr(e.target.name)
    setChecked((prev) => ({ ...prev, [e.target.name]: !prev[e.target.name] }))
    history.push(url)
  }
  useEffect(() => {
    if (!isFiltering) {
      history.push('/home')
    }
  }, [isFiltering])
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
                name="transferAll"
                id="all"
                className={styles.checkbox}
                onClick={clickHandle}
                checked={isChecked.transferAll}
              />
              Все
            </label>
            <label htmlFor="noDirectFlight">
              <Checkbox
                {...label}
                name="noTransfer"
                id="noDirectFlight"
                className={styles.checkbox}
                onClick={clickHandle}
                checked={isChecked.noTransfer}
              />
              Без пересадок
            </label>
            <label htmlFor="1_dirrect">
              <Checkbox
                {...label}
                name="transferOne"
                id="1_dirrect"
                className={styles.checkbox}
                onClick={clickHandle}
                checked={isChecked.transferOne}
              />
              1 пересадка
            </label>
            <label htmlFor="2_dirrect">
              <Checkbox
                {...label}
                name="transferTwo"
                id="2_dirrect"
                className={styles.checkbox}
                onClick={clickHandle}
                checked={isChecked.transferTwo}
              />
              2 пересадки
            </label>
            <label htmlFor="3_dirrect">
              <Checkbox
                {...label}
                name="transferThree"
                id="3_dirrect"
                className={styles.checkbox}
                onClick={clickHandle}
                checked={isChecked.transferThree}
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
