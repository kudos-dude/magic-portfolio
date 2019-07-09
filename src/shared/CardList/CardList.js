import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from 'semantic-ui-react';

import Card from 'shared/Card';

const List = ({ cards, addCard, removeCard }) => (
  <>
    {cards.map(card => (
      <Grid.Column width={2} key={card.id}>
        <Card card={card} addCard={addCard} removeCard={removeCard} key={card.id} />
      </Grid.Column>
    ))}
  </>
);

List.propTypes = {
  cards: PropTypes.array.isRequired,
  addCard: PropTypes.func,
  removeCard: PropTypes.func,
};

List.defaultProps = {
  addCard: null,
  removeCard: null,
}

export default List;
