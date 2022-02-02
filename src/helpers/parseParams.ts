const parseSearchSrt = (str: string, initialFilters: Record<string, boolean>, param: string) => {
  const result: Record<string, boolean> = {}
  const paramsValue = new URLSearchParams(str)?.get(param)?.split(' ')
  if (paramsValue && paramsValue?.length > 0) {
    paramsValue.forEach((item) => {
      if (item !== '' && item.split('')[0] !== '?') {
        result[item] = true
      }
    })
  }
  return { ...initialFilters, ...result }
}

export default parseSearchSrt
