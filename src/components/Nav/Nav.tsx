import React, { Component } from 'react';
import { NavItem } from './NavItem';
import { logout } from '../../firebase';

export interface IPage {
  name: string;
  link: string;
}

export default class Nav extends Component {
  public render() {
    return (
      <nav className="">
        <ul className="list-none flex gap-5">
          <NavItem className="btn" title="About" to="/about" />
          <NavItem className="btn" title="Editor" to="/" />
          <NavItem className="btn" title="Sing-in" to="/singin" />
          <NavItem className="btn" title="Sing-out" to="/singout" handler={() => logout()} />
        </ul>
      </nav>
    );
  }
}
