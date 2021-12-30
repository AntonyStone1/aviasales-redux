/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
const parseSearchSrt = (str, initialFilters, param) => {
  const result = {}
  const paramsValue = new URLSearchParams(str)?.get(param)?.split(' ')
  console.log(paramsValue)
  if (paramsValue?.length > 0) {
    console.log(paramsValue)
    paramsValue.forEach((item) => {
      if (item !== '' && item.split('')[0] !== '?') {
        result[item] = true
      }
    })
  }
  return { ...initialFilters, ...result }
}

export default parseSearchSrt
