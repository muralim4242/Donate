import React, { Component } from 'react';
import {Link} from "react-router";
class HeaderLeft extends Component {
  render() {
    return (
      <div className="navbar-header">
      <Link  className="navbar-brand" to="/">Blood Donation</Link>
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Bangalore</a></li>
</ul>
</div>
    );
  }
}
export default HeaderLeft;
