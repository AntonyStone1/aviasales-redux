import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles'
import { useHistory, useLocation } from 'react-router'
import { Container } from '@material-ui/core'
import createParams from '../../helpers/createParams'
import parseParams from '../../helpers/parseParams'

const useStyles = makeStyles({
  container: {
    display: 'flex !important',
    height: '50px',
    padding: '0 20px 0 20px !important',
    marginBottom: '4%',
    border: 'none',
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
  span: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
})

export default function SortRadioButtons() {
  const styles = useStyles()
  const history = useHistory()
  const searchStr = useLocation().search
  const initialState: Record<string, boolean> = {
    price: false,
    speed: false,
    optimal: false,
  }
  const [state, setState] = useState(initialState)

  useEffect(() => {
    setState(parseParams(searchStr, state, 'sort'))
  }, [searchStr])
  const sortHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const res = { ...initialState, [e.target.value]: !initialState[e.target.value] }
    setState((prev) => ({ ...prev, ...res }))
  }
  useEffect(() => {
    const url = createParams(state, 'sort', searchStr)
    if (url !== '') {
      history.push(url)
    }
  }, [state])

  return (
    <Container className={styles.container}>
      <label htmlFor="1" className={styles.label}>
        <input
          type="radio"
          name="sort"
          value="price"
          className={styles.radioBtn}
          id="1"
          onChange={sortHandle}
          checked={state.price}
        />
        <span className={styles.span}>САМЫЙ ДЕШЕВЫЙ</span>
      </label>
      <label htmlFor="2" className={styles.label}>
        <input
          type="radio"
          name="sort"
          value="speed"
          className={styles.radioBtn}
          id="2"
          onChange={sortHandle}
          checked={state.speed}
        />
        <span className={styles.span}>САМЫЙ БЫСТРЫЙ</span>
      </label>
      <label htmlFor="3" className={styles.label}>
        <input
          type="radio"
          name="sort"
          value="optimal"
          className={styles.radioBtn}
          id="3"
          onChange={sortHandle}
          checked={state.optimal}
        />
        <span className={styles.span}>ОПТИМАЛЬНЫЙ</span>
      </label>
    </Container>
  )
}
