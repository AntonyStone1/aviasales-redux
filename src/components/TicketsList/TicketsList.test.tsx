import React from 'react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react'
import TicketsList from './TicketsList'
import { TicketData } from '../../types/TicketsData'
import thunk from 'redux-thunk'

afterEach(cleanup)
const fakeTicketsData: TicketData[] = [
  {
    price: 123,
    carrier: 'FV',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2022-01-31T22:09:00.000Z',
        stops: ['AUH'],
        duration: 1255,
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2022-02-21T05:15:00.000Z',
        stops: ['DXB', 'HKG', 'AUH'],
        duration: 764,
      },
    ],
  },
  {
    price: 253,
    carrier: 'FV',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2022-01-31T22:09:00.000Z',
        stops: ['AUH'],
        duration: 755,
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2022-02-21T05:15:00.000Z',
        stops: ['DXB', 'HKG', 'AUH'],
        duration: 864,
      },
    ],
  },
  {
    price: 353,
    carrier: 'FV',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2022-01-31T22:09:00.000Z',
        stops: ['DXB', 'HKG', 'AUH'],
        duration: 1455,
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2022-02-21T05:15:00.000Z',
        stops: ['DXB', 'HKG', 'AUH'],
        duration: 1264,
      },
    ],
  },
]

describe('Component render', () => {
  let useEffect: jest.SpyInstance<
    void,
    [effect: React.EffectCallback, deps?: React.DependencyList | undefined]
  >
  let store: { getState: () => any; dispatch: any }
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f) => f())
  }
  // test('content without data', () => {
  //   const history = createMemoryHistory()
  //   history.push('/home')
  //   render(
  //     <Router history={history}>
  //       <TicketsList ticketsData={[]} />
  //     </Router>,
  //   )
  //   expect(screen.getByRole('progressbar')).toBeEnabled()
  // })

  // beforeEach(() => {
  //   /* mocking store */
  //   store = configureStore([thunk])({
  //     recipes: fakeRecipes,
  //     isLoading: false,
  //     error: null,
  //   })
  //   /* mocking useEffect */
  //   useEffect = jest.spyOn(React, 'useEffect')
  //   mockUseEffect() // 2 times
  //   mockUseEffect() //
  //   /* mocking useSelector on our mock store */
  //   jest.spyOn(ReactReduxHooks, 'useSelector').mockImplementation((state) => store.getState())
  //   /* mocking useDispatch on our mock store  */
  //   jest.spyOn(ReactReduxHooks, 'useDispatch').mockImplementation(() => store.dispatch)
  //   /* shallow rendering */
  //   wrapper = shallow(<TicketsList store={store} />)
  // })
  test('correct render with data', async () => {
    const history = createMemoryHistory()
    history.push('/home')
    const { getAllByTestId } = render(
      <Router history={history}>
        <TicketsList ticketsData={fakeTicketsData} />
      </Router>,
    )
    screen.debug()
    const ticketsPrice = getAllByTestId('ticket-price')?.map((ticket) =>
      ticket.textContent == null
        ? ticket
        : +ticket.textContent.split('P').join('').split(' ').join(''),
    )

    console.log('11111111', ticketsPrice)

    const fakeTicketPrice = fakeTicketsData.map((ticket) => ticket.price)
    expect(ticketsPrice).toEqual(fakeTicketPrice)
    screen.debug()
  })
})
