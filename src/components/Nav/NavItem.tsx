import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { TranslationProvider, Translation } from 'i18nano';
import { translations } from '../../translations';


interface INavItemProps {
  title: string;
  to: string;
  className?: string;
  handler?: () => void;
}

export const NavItem: FC<INavItemProps> = ({ title, to, className, handler }) => {

  console.log(translations)
  console.log(`header.${title}`)
  return (
    <TranslationProvider translations={translations.header}>
    <li>
      <Link className={className} to={to} onClick={handler}>
        <Translation path={title} />
      </Link>
    </li>
    </TranslationProvider>

  );
};
