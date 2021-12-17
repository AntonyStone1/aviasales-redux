/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'
import { Container, Typography } from '../../node_modules/@material-ui/core/index'
// eslint-disable-next-line import/no-unresolved
import { ReactComponent as YourSvg } from '../img/ticketLogo/S7 Logo.svg'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '3%',
  },
  priceLogo: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
  },
  priceText: {
    color: '#2196F3',
  },
  ticketInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
  },
  boxStyle: {
    width: '30%',
  },
  ticketContainer: {
    borderRadius: '5px',
    backgroundColor: '#fff',
  },
})

const Ticket = ({ ticketData }) => {
  const styled = useStyles()
  const someDate1 = new Date(ticketData.segments[0].date)
  const someDate2 = new Date(ticketData.segments[1].date)
  return (
    <Container className={styled.container}>
      <Box sx={{ boxShadow: 3 }} className={styled.ticketContainer}>
        <Box className={styled.priceLogo}>
          <Typography variant="h4" className={styled.priceText}>
            {ticketData.price} P
          </Typography>
          <YourSvg />
        </Box>
        <Box className={styled.ticketInfo}>
          <Box className={styled.boxStyle}>
            {someDate1.getHours()}:{someDate1.getMinutes()}
          </Box>
          <Box className={styled.boxStyle}>
            <Typography>В ПУТИ</Typography>
            <Typography>{Math.floor(ticketData.segments[0].duration / 60)}ч</Typography>
          </Box>
          <Box className={styled.boxStyle}>
            <Typography>{ticketData.segments[0].stops.length} ПЕРЕСАДКИ</Typography>
            <Typography>{ticketData.segments[0].stops.map((item) => `${item} `)}</Typography>
          </Box>
        </Box>
        <Box className={styled.ticketInfo}>
          <Box className={styled.boxStyle}>
            {someDate2.getHours()}:{someDate2.getMinutes()}
          </Box>
          <Box className={styled.boxStyle}>
            <Typography>В ПУТИ</Typography>
            <Typography>{Math.floor(ticketData.segments[1].duration / 60)}ч</Typography>
          </Box>
          <Box className={styled.boxStyle}>
            <Typography>{ticketData.segments[1].stops.length} ПЕРЕСАДКИ</Typography>
            <Typography>{ticketData.segments[1].stops.map((item) => `${item} `)}</Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Ticket
