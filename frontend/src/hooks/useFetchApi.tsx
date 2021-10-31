import axios, {AxiosError} from 'axios'
import {useEffect, useState} from "react";

type ResponseData = {
    current: string
}

export interface Response {
    data: ResponseData
    error: AxiosError | null,
    loading: boolean
}

export const useFetchApi = () => {
    const [response, setResponse] = useState<Response>({ data: { current: '' }, error: null, loading: false })

    useEffect(() => {
        fetchRequest()
    }, [])

    const fetchRequest = () => {
        setResponse(prevState => ({ ...prevState, loading: true }))
        axios.get<ResponseData>('http://localhost:7100/api/now').then((response) => {
            setResponse({ data: response.data, error: null, loading: false })
        }).catch(error => {
            setResponse({ data: { current: '' }, error: error, loading: false })
        })
    }

    return response
}