import ReactDOM from "react-dom";
import React from "react";
import Hello from "./components/Hello";
import CurrentTime from "./components/CurrentTime";

ReactDOM.render(
    <React.StrictMode>
        <Hello />
        <CurrentTime />
    </React.StrictMode>,
    document.getElementById('root')
)