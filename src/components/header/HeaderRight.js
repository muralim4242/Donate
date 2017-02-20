import React, { Component } from 'react';
import '../../styles/App.css';
import Login from '../../components/Login';


class HeaderRight extends Component {

  render() {
    return (  <div className="App">

        <ul className="nav navbar-nav navbar-right">
        <li><a href="#"><span className="glyphicon"></span>BLOG</a></li>
        <li><a href="#"><span className="glyphicon glyphicon-user"></span>CONTACT</a></li>
        <li><a href="#"><span className="glyphicon glyphicon-user"></span>SIGN UP</a></li>
        <li><a link={Login}><span className="glyphicon glyphicon-user"></span>LOGIN</a></li>
        </ul>
        {this.props.children}
        </div>
    );
  }
}
export default HeaderRight;
