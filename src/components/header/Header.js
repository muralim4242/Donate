import React, { Component } from 'react';
import HeaderRight from './HeaderRight';
import HeaderLeft from './HeaderLeft'
class Header extends Component {
  render() {
    return (
      <div className="App">
        <HeaderRight/>
        <HeaderLeft/>
      </div>
    );
  }
}
export default Header;
