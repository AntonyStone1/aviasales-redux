import parseParams from 'helpers/parseParams'

const createParams = (param, filters, searcStr) => {
  let result
  console.log('filters[param]', filters[param])
  if (!filters[param] && searcStr === '') {
    result = `?${param}=true`
  } else {
    result = `${searcStr}&${param}=true`
  }
  // if (filters === '') {
  //   result += `?${param}=true`
  // } else {
  //   result += `&${param}=true`
  // }
  console.log(result)
  return result
  // const parsedFilters = parseParams(filters)
  // console.log('parsed', parsedFilters)
  // console.log('parsedFilters[param]', parsedFilters[param])
  // if (parsedFilters[param] === 'true') {
  //   const res = result
  //     .slice(1)
  //     .split('&')
  //     .map((item) => item.split('='))
  //     .filter((item) => item[0] !== param)
  //   console.log('res', res)
  //   result = res.reduce((acum, item) => {
  //     if (item.length) {
  //       console.log(2)
  //       acum += `&${item[0]}=${item[1]}`
  //       result = acum
  //       console.log(result)
  //     } else {
  //       console.log('filters', filters)
  //       result = filters
  //     }
  //   }, '?')
  //   return result
  // }
  // // return result

  // if (filters === '') {
  //   result = `?${param}=${!parsedFilters[param]}`
  // } else {
  //   result = `${filters}&${param}=${!parsedFilters[param]}`
  // }
  // // console.log('result', result)
  // return result
}

export default createParams
