/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
const parseSearchSrt = (str, initialFilters) => {
  let parsedObj = {}
  console.log('initialFilters', initialFilters)
  console.log('str', str)
  const res = str
    .slice(1)
    .split('&')
    .map((item) => item.split('='))
  const filteredRes = res
    .filter((item) => item[0] !== '')
    .map((item) => {
      if (item[1] === 'true') {
        item[1] = true
      } else {
        item[1] = false
      }
      return item
    })
  console.log(initialFilters)
  parsedObj = Object.fromEntries(filteredRes)
  const result = { ...parsedObj, ...initialFilters }
  if (initialFilters) console.log('result', result)
  return { ...initialFilters, ...parsedObj }
}

export default parseSearchSrt
