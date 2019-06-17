import React from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
} from 'semantic-ui-react';

import Card from 'shared/Card';

const CardList = ({
  cards,
}) => (
  <Grid stackable width={960}>
    {cards.map(card => (
      <Grid.Column width={100}>
        <Card card={card} />
      </Grid.Column>
    ))}
  </Grid>
)

CardList.propTypes = {
  cards: PropTypes.array.isRequired,
}

export default CardList;