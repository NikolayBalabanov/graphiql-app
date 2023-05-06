import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface INavItemProps {
  title: string;
  to: string;
  className?: string;
  handler?: () => void;
}

export const NavItem: FC<INavItemProps> = ({ title, to, className, handler }) => {
  return (
    <li>
      <Link className={className} to={to} onClick={handler}>
        {title}
      </Link>
    </li>
  );
};
