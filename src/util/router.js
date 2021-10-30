import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import App from "../App";

export default function pageRouter() {
    return (
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/comment/:id' component={App} />
        </Switch>
    );
}