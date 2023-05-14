import React from "react";
import UnderscoreLink from "../underscore-link/UnderscoreLink";

import './header.scss';

const classes = {
    headerList: 'header-list',
    header: 'header',
}
const Header = () => {
    return (
        <header className={classes.header}>
            <ul className={classes.headerList}>
                <li>
                    <UnderscoreLink to="/">Home</UnderscoreLink>
                </li>
                <li>
                    <UnderscoreLink to="/portfolio">Portfolio</UnderscoreLink>
                </li>
            </ul>
        </header>
    );
};

export default Header;
