import React from "react";
import { Link } from "react-router-dom";

import './header.scss';

const classes = {
    headerList: 'header-list',
    header: 'header',
    headerLink: 'header-link'
}
const Header = () => {
    return (
        <header className={classes.header}>
            <ul className={classes.headerList}>
                <li><Link className={classes.headerLink} to="/">Home</Link></li>
                <li><Link className={classes.headerLink} to="/portfolio">Portfolio</Link></li>
            </ul>
        </header>
    );
};

export default Header;
