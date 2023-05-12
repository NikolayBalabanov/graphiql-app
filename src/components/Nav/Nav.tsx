import React, { Component } from 'react';
import { NavItem } from './NavItem';
import { logout } from '../../firebase';
import { LanguageChange } from './Switch';

export interface IPage {
  name: string;
  link: string;
}

export default class Nav extends Component {
  public render() {
    return (
      <nav className="">
        <ul className="list-none flex gap-5">
          <NavItem className="btn" title="about" to="/about" />
          <NavItem className="btn" title="editor" to="/" />
          <NavItem className="btn" title="signIn" to="/singin" />
          <NavItem className="btn" title="signOut" to="/singout" handler={() => logout()} />
          <LanguageChange />
        </ul>
      </nav>
    );
  }
}
