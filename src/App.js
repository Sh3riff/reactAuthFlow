import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from './customRoute/PrivateRoute';
import AuthRoute from './customRoute/AuthRoute';

import { AuthContext } from "./context/auth";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from "./pages/Login";
import Signup from './pages/Signup';
import Referer from './pages/Referer';

function App(props) {

    const existingTokens = JSON.parse(localStorage.getItem("tokens"));
    const [authTokens, setAuthTokens] = useState(existingTokens);
    
    const setTokens = (data) => {
        localStorage.setItem("tokens", JSON.stringify(data));
        setAuthTokens(data);
    }


  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens }}>
        <Router>
        <div>
            <ul>
                <li> <Link to="/">Home Page</Link> </li>
                <li> <Link to="/admin">Admin Page</Link> </li>
                <li> <Link to="/login">Login</Link> </li>
                <li> <Link to="/signup">Sign Up</Link> </li>
                <li> <Link to="/referer">Referer</Link> </li>
            </ul>
        </div>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/referer" component={Referer} />
            <AuthRoute exact path="/login" component={Login} />
            <AuthRoute path="/signup" component={Signup} />
        </Router>
    </AuthContext.Provider>
  );
}

export default App;