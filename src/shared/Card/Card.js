import React from 'react';
import PropTypes from 'prop-types';

import { Image } from 'semantic-ui-react';

import noImg from 'assets/images/no_card_img.png';

const Card = ({ card }) => {
  const imgSrc = () => {
    if(!card.image_uris) return noImg;
    const imageOptions = Object.keys(card.image_uris);

    if (imageOptions.includes('normal')) return card.image_uris.normal;
    if (!imageOptions.length) return noImg;
    return card.image_uris[imageOptions[0]];
  };

  return (
    <>
      <Image src={imgSrc()} size="medium" />
      {card.name}
    </>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Card;
