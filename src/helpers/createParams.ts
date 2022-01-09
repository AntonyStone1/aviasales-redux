/* eslint-disable no-param-reassign */
const createParams = (initialParams: object, param: string, str: string) => {
  let result = ''
  let res = ''
  const paramsStr = new URLSearchParams(str)
  const arr = Object.entries(initialParams)
  if (paramsStr.has(param) && str !== '') {
    if (arr.find((item) => item[1] === true)) {
      res = arr.reduce((acum, item) => {
        if (item[1] === true) {
          acum += `${item[0]} `
        }
        return acum
      }, ``)
    }

    paramsStr.set(param, res.trim())
    if (res === '') {
      paramsStr.delete(param)
    }
    result = `?${paramsStr.toString()}`

    return result
  }
  if (arr.find((item) => item[1] === true)) {
    res = arr.reduce((acum, item) => {
      if (item[1] === true) {
        acum += `${item[0]} `
      }
      return acum
    }, ``)
  }
  if (res !== '') {
    paramsStr.set(param, res.trim())
    result = `?${paramsStr.toString()}`
  }

  return result
}

export default createParams
