import React from 'react'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { MemoryRouter, Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import SortRadioButtons from './SortRadioButtons'

afterEach(cleanup)

describe('SortRadioButtons render', () => {
  test('Rendering buttons text content', () => {
    render(<SortRadioButtons />, { wrapper: MemoryRouter })
    expect(screen.getByText(/САМЫЙ ДЕШЕВЫЙ/i)).toBeInTheDocument()
    expect(screen.getByText(/САМЫЙ БЫСТРЫЙ/i)).toBeInTheDocument()
    expect(screen.getByText(/ОПТИМАЛЬНЫЙ/i)).toBeInTheDocument()
  })
})

describe('events', () => {
  it('checkbox click', () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <SortRadioButtons />
      </MemoryRouter>,
    )

    const radioBtnSpeed = screen.getByDisplayValue('speed')
    expect(radioBtnSpeed).not.toBeChecked()
    fireEvent.click(radioBtnSpeed)
    expect(radioBtnSpeed).toBeChecked()

    const radioBtnPrice = screen.getByDisplayValue('price')
    expect(radioBtnPrice).not.toBeChecked()
    fireEvent.click(radioBtnPrice)
    expect(radioBtnPrice).toBeChecked()

    const radioBtnOptimal = screen.getByDisplayValue('optimal')
    expect(radioBtnOptimal).not.toBeChecked()
    fireEvent.click(radioBtnOptimal)
    expect(radioBtnOptimal).toBeChecked()
  })

  test('state to URL params', () => {
    const history = createMemoryHistory()
    history.push('/home')
    render(
      <Router history={history}>
        <SortRadioButtons />
      </Router>,
    )
    const radioBtnSpeed = screen.getByDisplayValue('speed')
    expect(radioBtnSpeed).not.toBeChecked()

    fireEvent.click(radioBtnSpeed)
    expect(history.location.search).toContain('speed')

    const radioBtnPrice = screen.getByDisplayValue('price')
    expect(radioBtnPrice).not.toBeChecked()
    fireEvent.click(radioBtnPrice)
    expect(history.location.search).toContain('price')

    const radioBtnOptimal = screen.getByDisplayValue('optimal')
    expect(radioBtnOptimal).not.toBeChecked()
    fireEvent.click(radioBtnOptimal)
    expect(history.location.search).toContain('optimal')
  })
})
