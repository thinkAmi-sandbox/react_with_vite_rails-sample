import {useFetchApi} from "../hooks/useFetchApi";

const CurrentTime = (): JSX.Element => {
    const { data, error, loading } = useFetchApi()

    if (loading) return <div>...loading</div>
    if (error) return <div>{error.message}</div>

    return (
        <div>current: {data.current}</div>
    )
}

export default CurrentTime