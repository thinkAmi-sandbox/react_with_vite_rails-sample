import * as api from './types/typescript-axios/api'
import axios, {AxiosInstance} from "axios";

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'json'
})

instance.interceptors.request.use(request => {
  // どんなURLでリクエストしているかをconsole出力してみる
  console.log(request.url)
  return request
})

const options: [undefined, string, AxiosInstance] = [undefined, '', instance]

export const arrayInQueryParamsApi = new api.ArrayInQueryParamsApi(...options)