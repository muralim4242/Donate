import React, { Component } from 'react';
import HeaderRight from './HeaderRight';
import HeaderLeft from './HeaderLeft';
class Header extends Component {
  render() {
    return (<div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">

        <HeaderRight/>
        <HeaderLeft/>
          </div>
      </nav>
      </div>
    );
  }
}
export default Header;
