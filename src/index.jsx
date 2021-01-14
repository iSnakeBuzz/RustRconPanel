import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, withRouter, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

/* Importing Pages */
import App from './pages/App';
import AddServer from './pages/AddServer';

/* Importing CSS */
import './assets/css/theme.css';
import './assets/css/snake.css';
import './assets/css/shark.scss';

import { ThemeProvider } from '@material-ui/core/styles';
import MUITheme from './assets/themes/MUITheme'

/* Stats */
import reportWebVitals from './reportWebVitals';


/* Adding transitions to the Routes  */

ReactDOM.render(
  <ThemeProvider theme={MUITheme}>
    <Router>
      <Switch>
        <Route exact path="/add-server" component={AddServer} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
