/* eslint-disable consistent-return */
const sortTickets = (obj, data) => {
  const result = data
  if (obj?.price) {
    result?.sort((a, b) => a.price - b.price)
    console.log({ result })
    return result
  }
  if (obj?.speed) {
    result?.sort((a, b) => a.segments[0].duration - b.segments[0].duration)
    console.log({ result })
    return result
  }
  if (obj?.optimal) {
    result?.sort((a, b) => a.price + a.segments[0].duration - (b.price + b.segments[0].duration))
    console.log({ result })
    return result
  }
  if (result.length === 0) {
    return data
  }
  return data
}

export default sortTickets
