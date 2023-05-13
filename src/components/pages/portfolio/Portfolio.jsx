import React from "react";

import './portfolio.scss';



const classes = {
    main: "main",
    mainTitle: "main-title",
    mainCardsList: 'main-cards-list',
    mainItem: 'main-cards-list-item',
    cardTitle: 'main-cards-list-item-title',
    cardDescription: 'main-cards-list-item-description',
    cardImage: 'main-cards-list-item-image'
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
        <main className={classes.main}>
            <h1 className={classes.mainTitle}>Portfolio</h1>
            <div className={classes.mainCardsList}>
                {
                    portfolios.map(item => (
                        <div style={{ backgroundImage: `url(${item.image})` }} className={classes.mainItem}>
                            <h2 className={classes.cardTitle}>{item.name}</h2>
                            <p className={classes.cardDescription}>{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </main>
    );
};

export default Portfolio;
