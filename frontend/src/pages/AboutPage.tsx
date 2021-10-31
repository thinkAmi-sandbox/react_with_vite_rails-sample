import { Link } from 'react-router-dom'

const AboutPage = (): JSX.Element => {
    return (
        <>
            <h1>About Page</h1>
            <Link to="/">Go to Hello page</Link>
        </>
    )
}

export default AboutPage