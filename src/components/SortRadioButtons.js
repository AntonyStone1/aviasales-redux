/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react'
import store from 'store/store'
import { makeStyles } from '@mui/styles'
import sortDataPrice from 'store/action/sortData/sortDataPrice'
import sortDataFast from 'store/action/sortData/sortDataFast'
import sortDataOptimal from 'store/action/sortData/sortDataOptimal'
import { Container } from '../../node_modules/@material-ui/core/index'

const useStyles = makeStyles({
  container: {
    display: 'flex !important',
    height: '50px',
    padding: '0 20px 0 20px !important',
    marginBottom: '4%',
    borderRadius: '5px !important',
  },
  radioBtn: {
    display: 'none',
  },
  label: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: '12px',
    lineHeight: '20px',
    height: '50px',
    width: '33%',
    color: '#4A4A4A',
    backgroundColor: '#fff',
    border: '1px solid #DFE5EC',
  },
  border: {
    borderRadius: '5px',
  },
  rightBtn: {
    borderBottomRightRadius: '5px',
    borderTopRightRadius: '5px',
  },
})

const sortHandlePrice = () => {
  store.dispatch(sortDataPrice)
}
const sortHandleFast = () => {
  store.dispatch(sortDataFast)
}
const sortHandleOptimal = () => {
  store.dispatch(sortDataOptimal)
}

export default function SortRadioButtons() {
  const styles = useStyles()
  return (
    <Container className={styles.container}>
      <input
        type="radio"
        value="chip"
        name="sort-btn"
        className={styles.radioBtn}
        id="1"
        onClick={sortHandlePrice}
      />
      <label htmlFor="1" className={styles.label}>
        САМЫЙ ДЕШЕВЫЙ
      </label>
      <input
        type="radio"
        value="fast"
        name="sort-btn"
        className={styles.radioBtn}
        id="2"
        onClick={sortHandleFast}
      />
      <label htmlFor="2" className={styles.label}>
        САМЫЙ БЫСТРЫЙ
      </label>
      <input
        type="radio"
        value="optimal"
        name="sort-btn"
        className={styles.radioBtn}
        id="3"
        onClick={sortHandleOptimal}
      />
      <label htmlFor="3" className={styles.label}>
        ОПТИМАЛЬНЫЙ
      </label>
    </Container>
  )
}
