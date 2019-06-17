import React from 'react';
import PropTypes from 'prop-types';

import {
  Image,
} from 'semantic-ui-react';

const Card = ({ card }) => (
  <>
    <Image src={card.image_uris.normal} />
    {card.name}
    
  </>
)

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Card;