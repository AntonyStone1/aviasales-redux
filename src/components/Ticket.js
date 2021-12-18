/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'
import { Container, Typography } from '../../node_modules/@material-ui/core/index'
import { ReactComponent as YourSvg } from '../img/S7_Logo.svg'

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
    width: '100%',
  },
  ticketContainer: {
    borderRadius: '5px',
    backgroundColor: '#fff',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
  },
  grayText: {
    color: '#A0B0B9',
  },
  textContainer: {
    width: '100%',
  },
})

const Ticket = ({ ticketData }) => {
  const styled = useStyles()
  const dataTicket1 = ticketData.segments[0]
  const dataTicket2 = ticketData.segments[1]
  const dateTicket1 = new Date(ticketData.segments[0].date)
  const durationTicket1 = new Date(ticketData.segments[0].duration)
  const dateTicket2 = new Date(ticketData.segments[1].date)
  const durationTicket2 = new Date(ticketData.segments[1].duration)
  console.log(
    ticketData.price
      .toString()
      .split('')
      .map((item, index) => {
        if (index === 2) return ` ${item}`
        return item
      })
      .join(''),
  )
  const generatePriceIndent = (price) =>
    price
      .toString()
      .split('')
      .map((item, index) => {
        if (index === 2) return ` ${item}`
        return item
      })
      .join('')
  const departureTime = (date) =>
    `${date.getHours().toString().padStart(2, '0')}:${date
      .getMinutes()
      .toString()
      .padStart(2, '0')}`
  const airrivalTime = (date, minutes) =>
    `${new Date(date.getTime() + minutes * 60000)
      .getHours()
      .toString()
      .padStart(2, '0')}:${new Date(date.getTime() + minutes * 60000)
      .getMinutes()
      .toString()
      .padStart(2, '0')}`

  return (
    <Container className={styled.container}>
      <Box className={styled.ticketContainer}>
        <Box className={styled.priceLogo}>
          <Typography variant="h4" className={styled.priceText}>
            {generatePriceIndent(ticketData.price)} P
          </Typography>
          <YourSvg />
        </Box>
        <Box className={styled.ticketInfo}>
          <Box className={styled.boxStyle}>
            <Typography
              className={styled.grayText}
            >{`${dataTicket1.origin} - ${dataTicket1.destination}`}</Typography>
            <Typography className={styled.boxStyle}>
              {`${departureTime(dateTicket1)} - 
            ${airrivalTime(dateTicket1, durationTicket1)}`}
            </Typography>
          </Box>
          <Box className={styled.boxStyle}>
            <Typography className={styled.grayText}>В ПУТИ</Typography>
            <Typography>{Math.floor(ticketData.segments[0].duration / 60)}ч</Typography>
          </Box>
          <Box className={styled.boxStyle}>
            <Typography className={styled.grayText}>
              {ticketData.segments[0].stops.length} ПЕРЕСАДКИ
            </Typography>
            <Typography>
              {ticketData.segments[0].stops
                .map((item) => `${item}`)
                .join(', ')
                .split('')}
            </Typography>
          </Box>
        </Box>
        <Box className={styled.ticketInfo}>
          <Box className={styled.boxStyle}>
            <Typography
              className={styled.grayText}
            >{`${dataTicket2.origin} - ${dataTicket2.destination}`}</Typography>
            <Typography className={styled.boxStyle}>
              {`${departureTime(dateTicket2)} - 
            ${airrivalTime(dateTicket2, durationTicket2)}`}
            </Typography>
          </Box>
          <Box className={styled.boxStyle}>
            <Typography className={styled.grayText}>В ПУТИ</Typography>
            <Typography>{Math.floor(ticketData.segments[1].duration / 60)}ч</Typography>
          </Box>
          <Box className={styled.boxStyle}>
            <Typography className={styled.grayText}>
              {ticketData.segments[1].stops.length} ПЕРЕСАДКИ
            </Typography>
            <Typography>
              {ticketData.segments[1].stops
                .map((item) => `${item}`)
                .join(', ')
                .split('')}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Ticket
