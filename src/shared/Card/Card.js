import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ card }) => (
  <>
    {card.name}
  </>
)

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Card;