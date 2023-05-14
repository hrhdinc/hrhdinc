import React from 'react';

import UnderscoreLink from '../underscore-link/UnderscoreLink';

import './footer.scss';


const classes = {
    footer: 'footer',
    footerList: 'footer-list',
}

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <ul className={classes.footerList} >
                <li>
                    <UnderscoreLink to="/">Home</UnderscoreLink>
                </li>
                <li>
                    <UnderscoreLink to="/portfolio">Portfolio</UnderscoreLink>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
