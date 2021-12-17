/* eslint-disable arrow-body-style */
import * as React from 'react'
import Button from '@mui/material/Button'
import { makeStyles } from '@mui/styles'
import ButtonGroup from '@mui/material/ButtonGroup'
import { Container } from '@material-ui/core'

const useStyles = makeStyles({
  btnsContainer: {
    marginBottom: '3%',
  },
  btn: {
    height: '50px',
  },
})

const SortButtons = () => {
  const styles = useStyles()
  return (
    <Container>
      <ButtonGroup
        className={styles.btnsContainer}
        variant="contained"
        aria-label="outlined primary button group"
        fullWidth
      >
        <Button className={styles.btn}>Самый дешевый</Button>
        <Button className={styles.btn} disabled>
          Самый быстрый
        </Button>
        <Button className={styles.btn} disabled>
          Оптимальный
        </Button>
      </ButtonGroup>
    </Container>
  )
}
export default SortButtons
