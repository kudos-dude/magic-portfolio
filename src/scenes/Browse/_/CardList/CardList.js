import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Pagination } from 'semantic-ui-react';

import Card from 'shared/Card';

const CardList = ({ cards }) => (
  <Grid stackable width={11}>
    {cards.map(card => (
      <Grid.Column width={2} key={card.id}>
        <Card card={card} />
      </Grid.Column>
    ))}
    <Pagination
      boundaryRange={0}
      defaultActivePage={1}
      ellipsisItem={null}
      firstItem={null}
      lastItem={null}
      siblingRange={1}
      totalPages={10}
    />
  </Grid>
);

CardList.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default CardList;
