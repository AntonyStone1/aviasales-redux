import axios from 'axios'

let baseEndpoint = ''

const getBaseHeaders = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
  // 'Access-Control-Allow-Origin': '*',
})

export const setBaseEndpoint = (ep) => {
  baseEndpoint = ep
}

const callApi = async (url, { headers = {}, params = {}, data, ...restOptions }) => {
  const config = {
    url: `${baseEndpoint}${url}`,
    headers: { ...getBaseHeaders(), ...headers },
    params: { ...params },
    data,

    ...restOptions,
  }

  if (restOptions.method === 'POST' && !config.data) {
    config.data = {}
  }

  const request = await axios.request(config)
  return request
}

export default {
  get: (url, options) => callApi(url, { ...options, method: 'GET' }),
  post: (url, options) => callApi(url, { ...options, method: 'POST' }),
  put: (url, options) => callApi(url, { ...options, method: 'PUT' }),
  delete: (url, options) => callApi(url, { ...options, method: 'DELETE' }),
}
