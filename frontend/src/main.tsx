import ReactDOM from "react-dom";
import React from "react";
import {Switch} from "react-router"
import {BrowserRouter, Route} from "react-router-dom";
import HelloPage from "./pages/HelloPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route path="/about">
                    <AboutPage />
                </Route>

                <Route exact path="/">
                    <HelloPage />
                </Route>

                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)