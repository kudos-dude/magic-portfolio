import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getEntitiesSession } from 'ducks/entities/selectors';

import { Grid } from 'semantic-ui-react';

import cardActions from 'ducks/Card';

import CardList from './_/CardList';
import Filter from './_/Filter';

const Browse = ({ cards, getCards }) => {
  useEffect(() => {
    getCards.loadCardsByPage(1);
  }, []);

  return (
    <>
      {/* <AppHeader /> */}
      <Grid>
        <Grid.Column width={3}>
          <Filter />
        </Grid.Column>
        <Grid.Column centered="true" width={13}>
          <CardList cards={cards} />
        </Grid.Column>
      </Grid>
    </>
  );
};

Browse.propTypes = {
  cards: PropTypes.array.isRequired,
  getCards: PropTypes.object.isRequired,
};

const mapState = state => {
  const session = getEntitiesSession(state);

  const { Card } = session;

  return {
    cards: Card.all().toModelArray(),
  };
};

const mapDispatch = dispatch => ({
  getCards: bindActionCreators(cardActions, dispatch),
});

export default connect(
  mapState,
  mapDispatch,
)(Browse);
