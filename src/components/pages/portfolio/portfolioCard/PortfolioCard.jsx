import React from "react";

import './portfolio-card.scss';

const classes = {
    card: 'card',
    cardBackdroundImage: 'card-background-image',
    cardMetadata: 'card-metadata',
    cardMetadataWrapper: 'card-metadata-wrapper',
    cardMetadataName: 'card-metadata-name',
    cardMetadataDescription: 'card-metadata-description',
};

const PortfolioCard = ({ data }) => {
    const { name, description, image } = data;

    return (
        <div className={classes.card}>
            <div className={classes.cardMetadataWrapper}>
                <img src={image} alt={name} className={classes.cardBackdroundImage} />
                <div className={classes.cardMetadata}>
                    <h2 className={classes.cardMetadataName}>{name}</h2>
                    <p className={classes.cardMetadataDescription}>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;