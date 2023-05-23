import React, { FC } from 'react';
import { NavItem } from './NavItem';
import { auth, logout } from '../../firebase';
import { LanguageChange } from './Switch';
import { useAuthState } from 'react-firebase-hooks/auth';

export interface IPage {
  name: string;
  link: string;
}

const loggedRoutes = [
  <NavItem key={'about'} className="btn align-middle text-xs md:text-base" title="about" to="/" />,
  <NavItem key={'editor'} className="btn align-middle text-xs md:text-base" title="editor" to="/editor" />,
  <NavItem key={'signOut'} className="btn align-middle text-xs md:text-base" title="signOut" to="" handler={() => logout()} />,
];

const unLoggedRoutes = [
  <NavItem key={'about'} className="btn align-middle text-xs md:text-base" title="about" to="/" />,
  <NavItem key={'signIn'} className="btn align-middle text-xs md:text-base" title="signIn" to="/registration" />,
];

export const Nav: FC = () => {
  const [user] = useAuthState(auth);
  return (
    <nav className="">
      <ul className="list-none flex md:gap-5 gap-px">
        {user ? loggedRoutes : unLoggedRoutes}
        <LanguageChange />
      </ul>
    </nav>
  );
};
