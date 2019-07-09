import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from 'semantic-ui-react';

import Card from 'shared/Card';

const List = ({ cards }) => (
  <>
    {cards.map(card => (
      <Grid.Column width={2} key={card.id}>
        <Card card={card} key={card.id} />
      </Grid.Column>
    ))}
  </>
);

List.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default List;
