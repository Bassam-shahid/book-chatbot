import React from 'react';
import Link from '@docusaurus/Link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container container--fluid">
        <div className="row footer__links">
          <div className="col footer__col">
            <h4 className="footer__title">Chapters</h4>
            <ul className="footer__items">
              <li className="footer__item">
                <Link className="footer__link-item" to="/book">
                  Foundations
                </Link>
              </li>
              <li className="footer__item">
                <Link className="footer__link-item" to="/book">
                  Data Management
                </Link>
              </li>
              <li className="footer__item">
                <Link className="footer__link-item" to="/book">
                  Model Development
                </Link>
              </li>
            </ul>
          </div>
          <div className="col footer__col">
            <h4 className="footer__title">More</h4>
            <ul className="footer__items">
              <li className="footer__item">
                <Link className="footer__link-item" to="/about">
                  About
                </Link>
              </li>
              <li className="footer__item">
                <Link className="footer__link-item" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="footer__item">
                <a
                  className="footer__link-item"
                  href="https://github.com/facebook/docusaurus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom text--center">
          <div className="footer__copyright">
            Copyright © {new Date().getFullYear()} AI-Native Driven Development Book. Built with Docusaurus.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;