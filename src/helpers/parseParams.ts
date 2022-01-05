<<<<<<< HEAD
/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
const parseSearchSrt = (str, initialFilters, param) => {
  const result = {}
  const paramsValue = new URLSearchParams(str)?.get(param)?.split(' ')
  if (paramsValue?.length > 0) {
    paramsValue.forEach((item) => {
      if (item !== '' && item.split('')[0] !== '?') {
        result[item] = true
      }
    })
  }
  return { ...initialFilters, ...result }
}

export default parseSearchSrt
=======
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
>>>>>>> c86aedb7feaa14c16f23553e9b907b71d55efa14
