/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */

const createParams = (initialParams, param, str) => {
  let result = ''
  let res = ''
  const paramsStr = new URLSearchParams(str)
  const arr = Object.entries(initialParams)
  if (arr.find((item) => item[1] === true)) {
    res = arr.reduce((acum, item) => {
      if (item[1] === true) {
        acum += `${item[0]} `
      }
      return acum
    }, ``)
  }

  if (res !== '') {
    paramsStr.set(param, res.slice(0, -1))
    return (result += `?${paramsStr.toString()}`)
  }
  return result
}

export default createParams
