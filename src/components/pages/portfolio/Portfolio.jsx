import React from "react";

import PortfolioCard from "./portfolioCard/PortfolioCard";

import './portfolio.scss';



const classes = {
    subpageMain: 'subpage-main',
    portfolioTitle: 'portfolio-title',
    portfolioCards: 'portfolio-cards',
    portfolioCardsWrapper: 'portfolio-cards-wrapper',
};

const portfolios = [
    {
        name: 123,
        description: 1231,
        image: 'https://placekitten.com/200/300',
        imageHover: 'https://placekitten.com/200/300'
    },
    {
        name: 123,
        description: 1231,
        image: 'https://qph.cf2.quoracdn.net/main-qimg-965b11ec95106e64d37f5c380802c305-lq',
        imageHover: 'https://placekitten.com/200/300'
    },
    {
        name: 123,
        description: 1231,
        image: 'https://i1.sndcdn.com/avatars-000147616246-ociwr4-t500x500.jpg',
        imageHover: 'https://placekitten.com/200/300'
    }
]
const Portfolio = () => {
    return (
        <>
        <h1 className={classes.portfolioTitle}>Portfolio</h1>
        <div className={classes.portfolioCardsWrapper}>
            <div className={classes.portfolioCards}>
                { portfolios.map( item => <PortfolioCard data={item} />) }
            </div>
        </div>
        </>
    );
};

export default Portfolio;
