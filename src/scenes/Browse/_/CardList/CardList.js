import React from 'react';
import PropTypes from 'prop-types';

import Card from 'shared/Card';

const CardList = ({
  cards,
}) => (
  <>
    {cards.map(card => <Card card={card} />)}
  </>
)

CardList.propTypes = {
  cards: PropTypes.array.isRequired,
}

export default CardList;