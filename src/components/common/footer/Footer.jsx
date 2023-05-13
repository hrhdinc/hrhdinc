import './footer.scss';
import { Link } from 'react-router-dom';
import React from 'react';

const classes = {
  footer: 'footer',
  footerList: 'footer-list',
  footerItem: 'footer-list-link'
}

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <ul className={classes.footerList} >
        <li ><Link className={classes.footerItem} to="/">Home</Link></li>
        <li><Link className={classes.footerItem} to="/portfolio">Portfolio</Link></li>
      </ul>
    </footer>
  );
};

export default Footer;
