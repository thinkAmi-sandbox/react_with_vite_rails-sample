import { Link } from 'react-router-dom'

const NotFoundPage = (): JSX.Element => {
    return (
        <>
            <h1>Not Found Page</h1>
            <Link to="/">Go to Hello page</Link>
        </>
    )
}

export default NotFoundPage