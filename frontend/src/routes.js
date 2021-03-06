import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./containers/App";
import NotFoundPage from "./containers/NotFoundPage.js";
import LoginPage from "./containers/LoginPage";
import Dashboard from "./containers/DashboardPage";
import Forum from "./containers/Forum";
import PostPage from "./containers/PostPage"

function loggedIn() {
    return localStorage.getItem("access_token") != null;
}

function requireAuth(nextState, replace) {
    if (!loggedIn()) {
        replace({
            pathname: "/cat/login"
        });
    }
}

export default (
    <Route>
        <Route path="/cat" component={LoginPage} />
        <Route path="/cat/login" component={LoginPage} />
        <Route path="/cat/home" component={App}>
            <IndexRoute component={Dashboard} />
            <Route path="dashboard" component={Dashboard} />
            <Route path="post" component={PostPage}/>
            <Route path="*" component={NotFoundPage} />
        </Route>
    </Route>
);
