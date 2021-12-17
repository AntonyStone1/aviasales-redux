/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react'
import store from 'store/store'
import { makeStyles } from '@mui/styles'
import SortDataPrice from 'store/action/sotrDataPrice'
import { Container } from '../../node_modules/@material-ui/core/index'

const useStyles = makeStyles({
  container: {
    display: 'flex !important',
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
    marginBottom: '3%',
    backgroundColor: '#fff',
    border: '1px solid #DFE5EC',
  },
})

const sortHandle = () => {
  store.dispatch(SortDataPrice)
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
        onClick={sortHandle}
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
        onClick={sortHandle}
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
        onClick={sortHandle}
      />
      <label htmlFor="3" className={styles.label}>
        ОПТИМАЛЬНЫЙ
      </label>
    </Container>
  )
}
