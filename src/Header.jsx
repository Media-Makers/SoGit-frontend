import React, { Component } from 'react';
import logo from './images/SoGit.png';
class Header extends Component {
    render() {
      return (
        <header>
          <Image src={ logo } alt="SoGit Logo" />
        </header>
      );
    }
  }
  
  export default Header;
