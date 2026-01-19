'use client';

import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useTheme } from '../contexts/theme-provider';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className="navbar navbar--fixed-top">
      <div className="container">
        <div className="navbar__left">
          <Link className="navbar__brand" to="/">
            <img
              className="navbar__logo"
              src={useBaseUrl('/img/logo.svg')}
              alt="AI-Native Driven Development"
            />
            <span className="navbar__title">AI-Native Driven Development</span>
          </Link>
        </div>
        <div className="navbar__items">
          <Link className="navbar__item navbar__link" to="/">
            Home
          </Link>
          <Link className="navbar__item navbar__link" to="/book">
            Book
          </Link>
          <Link className="navbar__item navbar__link" to="/about">
            About
          </Link>
        </div>
        <div className="navbar__items navbar__items--right">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;