import getTicketsData from '../action/getTicketsData'

test('', async () => {
  const dispatchMock = jest.fn()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const thunk = await getTicketsData(dispatchMock)
  expect(dispatchMock).toBeCalledTimes(1)
})
