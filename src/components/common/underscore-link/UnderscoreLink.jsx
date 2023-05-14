import React from 'react';
import { Link } from 'react-router-dom';

import './underscore-link.scss';

const classes = {
    underscoreLink: 'underscore-link',
};

const UnderscoreLink = ({ className, to, children }) => {
    return (
        <Link className={`${classes.underscoreLink} ${className}`} to={to}>
            {children}
        </Link>
    );
};

export default UnderscoreLink;
