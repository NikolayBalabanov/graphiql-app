import React, { Component } from 'react';
import { Nav } from './Nav/Nav';

export default class Header extends Component {
  render() {
    return (
      <header className="h-[50px] flex justify-between lg:px-10 sm:px-4 p-3 bg-BGcolor1 items-center rounded-b-lg sticky top-0">
        <h1>
          <a
            className="hover:text-textColorHover text-textColor duration-500 md:text-xl text-xs sm:text-base font-bold"
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
