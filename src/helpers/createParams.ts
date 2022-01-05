<<<<<<< HEAD
/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */

const createParams = (initialParams, param, str) => {
  let result = ''
  let res = ''
  const paramsStr = new URLSearchParams(str)
  const arr = Object.entries(initialParams)
=======
const createParams = (initialParams: any, param: any, str: any) => {
  let result = '';
  let res = '';
  const paramsStr = new URLSearchParams(str);
  const arr = Object.entries(initialParams);
>>>>>>> c86aedb7feaa14c16f23553e9b907b71d55efa14
  if (paramsStr.has(param) && str !== '') {
    if (arr.find((item) => item[1] === true)) {
      res = arr.reduce((acum, item) => {
        if (item[1] === true) {
<<<<<<< HEAD
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
=======
          acum += `${item[0]} `;
        }
        return acum;
      }, ``);
    }

    paramsStr.set(param, res.trim());
    if (res === '') {
      paramsStr.delete(param);
    }
    result = `?${paramsStr.toString()}`;

    return result;
>>>>>>> c86aedb7feaa14c16f23553e9b907b71d55efa14
  }
  if (arr.find((item) => item[1] === true)) {
    res = arr.reduce((acum, item) => {
      if (item[1] === true) {
<<<<<<< HEAD
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
=======
        acum += `${item[0]} `;
      }
      return acum;
    }, ``);
  }
  if (res !== '') {
    paramsStr.set(param, res.trim());
    result = `?${paramsStr.toString()}`;
  }

  return result;
};

export default createParams;
>>>>>>> c86aedb7feaa14c16f23553e9b907b71d55efa14
