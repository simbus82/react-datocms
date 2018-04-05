import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Main from './Main'
import Articoli from './Articoli'
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Articoli} />
      <Route path="articoli" component={Articoli} />
      <Route path="articoli/:articoloId" component={Articolo} />
    </Route>
  </Router>
), document.getElementById('root'))
