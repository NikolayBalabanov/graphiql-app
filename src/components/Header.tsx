import React, { Component } from 'react';
import { Nav } from './Nav/Nav';

export default class Header extends Component {
  render() {
    return (
      <header className="h-[50px] flex justify-between px-5 bg-BGcolor1 items-center rounded-b-lg">
        <h1>
          <a
            className="hover:text-textColorHover text-textColor duration-500 text-xl font-bold"
            href="/"
          >
            RSS-GraphQL
          </a>
        </h1>
        <Nav />
      </header>
    );
  }
}
