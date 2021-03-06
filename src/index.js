import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Main from './Main'
import Articoli from './Articoli'
import Articolo from './Articolo'
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Articoli} />
      <Route path="articoli" component={Articoli} />
      <Route path="articolo/:articoloId" component={Articolo} />
    </Route>
  </Router>
), document.getElementById('root'))
