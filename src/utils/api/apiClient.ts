<<<<<<< HEAD
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
import axios, { AxiosResponse } from 'axios'

type RestOptions = {
  method: string;
}
=======
import axios, { AxiosResponse } from 'axios';

type RestOptions = {
  method: string;
};
>>>>>>> c86aedb7feaa14c16f23553e9b907b71d55efa14
type ConfigOptions = {
  url: string;
  headers?: any;
  params?: Object;
  data?: any;
  restOptions?: RestOptions;
<<<<<<< HEAD
}
type BaseHeaders = {
  Accept: string;
  'Content-Type': string;
}
=======
};
type BaseHeaders = {
  Accept: string;
  'Content-Type': string;
};
>>>>>>> c86aedb7feaa14c16f23553e9b907b71d55efa14

type CallApi = {
  headers?: Record<string, string>;
  params?: Record<string, string>;
  data?: any;
  options?: {
    method: string;
  };
<<<<<<< HEAD
}

let baseEndpoint: string = ''
=======
};

let baseEndpoint: string = '';
>>>>>>> c86aedb7feaa14c16f23553e9b907b71d55efa14

const getBaseHeaders = (): BaseHeaders => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
<<<<<<< HEAD
})

export const setBaseEndpoint = (ep: string) => {
  baseEndpoint = ep
}

const callApi =
  async (url: string, { headers = {}, params = {}, data, options }: CallApi ): Promise<any> => {
=======
});

export const setBaseEndpoint = (ep: string) => {
  baseEndpoint = ep;
};

const callApi = async (
  url: string,
  { headers = {}, params = {}, data, options }: CallApi,
): Promise<any> => {
>>>>>>> c86aedb7feaa14c16f23553e9b907b71d55efa14
  const config = {
    url,
    headers: { ...getBaseHeaders(), ...headers },
    params: { ...params },
    data,

    ...options,
<<<<<<< HEAD
  }
    let hasError = false
  if (options == undefined) {
    console.log('restOptions - undefined');    
  } else if (options.method === 'POST' && !config.data) {
    config.data = {}
  }
  
  const request = async (conf: ConfigOptions): Promise<any>  => {
    const responseData: boolean | AxiosResponse<any, any> = await axios.request(conf).catch(() => hasError = true)

    if (typeof responseData === 'boolean') {
      console.log(hasError);      
      return request(conf) 
    }
    if (responseData.status === 200) {
    return responseData
    }
  }
  const responseData = request(config)
  return responseData
}
=======
  };
  let hasError = false;
  if (options == undefined) {
    console.log('restOptions - undefined');
  } else if (options.method === 'POST' && !config.data) {
    config.data = {};
  }

  const request = async (conf: ConfigOptions): Promise<any> => {
    const responseData: boolean | AxiosResponse<any, any> = await axios
      .request(conf)
      .catch(() => (hasError = true));

    if (typeof responseData === 'boolean') {
      console.log(hasError);
      return request(conf);
    }
    if (responseData.status === 200) {
      return responseData;
    }
  };
  const responseData = request(config);
  return responseData;
};
>>>>>>> c86aedb7feaa14c16f23553e9b907b71d55efa14

export default {
  get: (url: string, options?: any) => callApi(url, { ...options, method: 'GET' }),
  post: (url: string, options?: any) => callApi(url, { ...options, method: 'POST' }),
  put: (url: string, options?: any) => callApi(url, { ...options, method: 'PUT' }),
  delete: (url: string, options?: any) => callApi(url, { ...options, method: 'DELETE' }),
<<<<<<< HEAD
}
=======
};
>>>>>>> c86aedb7feaa14c16f23553e9b907b71d55efa14
