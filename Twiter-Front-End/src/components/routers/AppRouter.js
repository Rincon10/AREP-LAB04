import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    /* Link, */
    Redirect,
} from 'react-router-dom';
import LoginScreen from 'components/login/LoginScreen';
import SignUpScreen from 'components/signup/SignUpScreen';
import HomeScreen from 'components/home/HomeScreen';
import { UserContext } from 'context/UserContext';

const AppRouter = () => {
    const { user } = useContext(UserContext);

    const { logged } = user;

    return (
        <Router>
            <div>
                <Switch>
                    {!logged && (
                        <Route exact path="/login" component={LoginScreen} />
                    )}
                    {!logged && (
                        <Route exact path="/singup" component={SignUpScreen} />
                    )}
                    {logged && (
                        <Route exact path="/home" component={HomeScreen} />
                    )}
                    <Route exact path="/home" component={HomeScreen} />

                    {!logged && <Redirect to="/login" />}

                    {logged && <Redirect to="/home" />}
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
