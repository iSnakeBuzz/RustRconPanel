import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import Home from '../../pages/Home';
import Server from '../../pages/Server';

const AnimatedSwitch = ({ location }) => {
    return (
        <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route exact path="/server/:id" component={Server} />
        </Switch>
    );
};

export default withRouter(AnimatedSwitch);