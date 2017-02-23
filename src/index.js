import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';
import { Router, Route,Link, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
           <Route path="/" component={App}>
           </Route>
   </Router>,
  document.getElementById('root')
);
