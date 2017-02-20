import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import HeaderRight from './components/header/HeaderRight';
import Login from './components/Login';
import './styles/index.css';import { Router, Route, Link, browserHistory, IndexRoute,hashHistory } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
           <Route path="/" component={App}>
               <IndexRoute component={HeaderRight} />
         <Route path="/login" component={Login} />

           </Route>
   </Router>,
  document.getElementById('root')
);
