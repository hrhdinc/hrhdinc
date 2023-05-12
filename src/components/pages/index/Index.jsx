import { Link } from "react-router-dom";
import React from "react";

import bz from "../../../assets/images/bz.jpg";
import './index.scss';

const classes = {
    wrapper: "wrapper",
    backroundImage: "background-image",
    content: "content",
    header: "header",
    headerPhone: "header-phone",
    headerPhoneLink: "header-phone-link",
    headerEmail: "header-email",
    headerEmailLink: "header-email-link",
    main: "main",
    mainTitle: "main-title",
    mainLinkGroup: "main-link-group",
    mainLink: "main-link",
    mainPaddingBottom: "main-padding-bottom",
    footer: "footer",
    footerTitle: "footer-title",
}

const Index = () => {
    return (
        <div className={classes.wrapper}>
            <img src={bz} alt="bz" className={classes.backroundImage} />
            {/* <div className={classes.backroundImage}></div> */}

            <div className={classes.content}>
                <header className={classes.header}>
                    <div className={classes.headerPhone}>
                        <Link to="tel:1234567890" className={classes.headerPhoneLink}>
                            +1 (234) 567-890
                        </Link>
                    </div>
                    <div className={classes.headerEmail}>
                        <Link to="mailto:email@email.email" className={classes.headerEmailLink}>
                            email@email.email
                        </Link>
                    </div>
                </header>
                <main className={classes.main}>
                    <div className={classes.mainPaddingBottom}></div>
                    <h1 className={classes.mainTitle}>Blue Zenith</h1>
                    <div className={classes.mainLinkGroup}>
                        <Link className={classes.mainLink} to="/portfolio">Portfolio</Link>
                        <Link className={classes.mainLink} to="/careers">Careers</Link>
                    </div>

                </main>
                <footer className={classes.footer}>
                    <div className={classes.footerTitle}>
                        Blue Zenith &copy; 2023
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Index;