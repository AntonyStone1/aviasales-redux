const parseSearchSrt = (str: any, initialFilters: any, param: any) => {
  const result: any = {};
  const paramsValue = new URLSearchParams(str)?.get(param)?.split(' ');
  if (paramsValue && paramsValue?.length > 0) {
    paramsValue.forEach((item) => {
      if (item !== '' && item.split('')[0] !== '?') {
        result[item] = true;
      }
    });
  }
  return { ...initialFilters, ...result };
};

export default parseSearchSrt;
