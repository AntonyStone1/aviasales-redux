/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox'
import { makeStyles } from '@mui/styles'
import { Link, useLocation } from 'react-router-dom'
import useQuery from 'hooks/useQuery'
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
    height: '250px',
    backgroundColor: '#fff',
    // padding: '20px 20px 10px 20px',
    borderRadius: '5px',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
  },
  checkbox: {
    // padding: '0 !important',
    padding: '10px 20px 10px 20px',
  },
  link: {
    textDecoration: 'none',
    color: '#4A4A4A',
  },
})

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

const CheckboxPanel = () => {
  const styles = useStyles()
  const [isChecked, setChecked] = useState({
    transferAll: false,
    noTransfer: false,
    transferOne: false,
    transferTwo: false,
    transferThree: false,
  })

  const query = useQuery()
  const clickHandle = (e) => {
    setChecked((prev) => ({ ...prev, [e.target.name]: !prev[e.target.name] }))
  }

  return (
    <>
      <Container className={styles.checkboxContainer}>
        <Box className={styles.checkboxPanel}>
          <Typography variant="h6" className={styles.checkboxHeading}>
            Количество пересадок
          </Typography>
          <div className={styles.container}>
            <Link to="/home?param=transferAll" className={styles.link}>
              <Checkbox
                {...label}
                name="transferAll"
                id="all"
                className={styles.checkbox}
                onClick={clickHandle}
                checked={isChecked.transferAll}
              />
              Все
            </Link>
            <Link to="/home?param=noTransfer">
              <label htmlFor="directFlight">
                <Checkbox
                  {...label}
                  name="noTransfer"
                  id="directFlight"
                  className={styles.checkbox}
                  onClick={clickHandle}
                  checked={isChecked.noTransfer}
                />
                Без пересадок
              </label>
            </Link>
            <Link to="/home?param=transferOne">
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
            </Link>
            <Link to="/home?param=transferTwo">
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
            </Link>
            <Link to="/home?param=transferThree">
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
            </Link>
          </div>
        </Box>
      </Container>
    </>
  )
}

export default CheckboxPanel
