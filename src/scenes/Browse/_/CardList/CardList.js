import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Grid, Pagination } from 'semantic-ui-react';

import List from 'shared/CardList';

const PAGE_SIZE = 24;

const CardList = ({ cards }) => {
  const [pageNumber, setActivePage] = useState(1);

  return (
    <Grid stackable width={11}>
      {/* TODO: Pagination after search */}
      {/* <List cards={cards.slice(pageNumber * PAGE_SIZE, pageNumber * PAGE_SIZE + PAGE_SIZE)} />
      <Pagination
        activePage={pageNumber}
        onPageChange={(_, { activePage }) => {
          setActivePage(activePage);
        }}
        boundaryRange={0}
        siblingRange={1}
        totalPages={cards.length % PAGE_SIZE}
      /> */}
      <List cards={cards} />
    </Grid>
  );
};

CardList.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default CardList;
