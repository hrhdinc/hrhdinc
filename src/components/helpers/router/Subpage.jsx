import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";

import './subpage.scss';

const classes = {
    subpageMain: 'subpage-main',
}

const Subpage = () => {
    return (
        <div>
            <Header />
            <main className={classes.subpageMain}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Subpage;
