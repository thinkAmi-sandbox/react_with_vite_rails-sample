import Hello from "../components/Hello";
import CurrentTime from "../components/CurrentTime";
import {Link} from "react-router-dom";

const HelloPage = (): JSX.Element => {
    return (
        <>
            <Hello />
            <CurrentTime />

            <Link to="/about">Go to About page</Link>
        </>
    )
}

export default HelloPage