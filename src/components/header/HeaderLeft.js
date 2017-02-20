import React, { Component } from 'react';
class HeaderLeft extends Component {
  render() {
    return (
      <div className="navbar-header">
        <a className="navbar-brand" href="#">Blood Donation</a>

      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Bangalore</a></li>
</ul>
</div>
    );
  }
}
export default HeaderLeft;
