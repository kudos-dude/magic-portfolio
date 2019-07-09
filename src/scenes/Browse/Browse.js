import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getEntitiesSession } from 'ducks/entities/selectors';
import uuid from 'uuid/v1';

import { Grid } from 'semantic-ui-react';

import cardActions from 'ducks/Card';
import rawDeckActions from 'ducks/Deck';
import rawGlobalDeckActions from 'ducks/global/currentDeck';

import AppHeader from 'shared/AppHeader';

import CardList from './_/CardList';
import DeckList from './_/DeckList';
import Filter from './_/Filter';

const Browse = ({ cards, getCards, currentDeckId, deckActions, globalDeckActions }) => {
  useEffect(() => {
    getCards.loadCardsByPage(1);
    if (!currentDeckId) {
      const newCurrentDeckId = uuid();
      globalDeckActions.setCurrentDeckId(newCurrentDeckId);
      deckActions.createEmptyDeck(newCurrentDeckId);
    }
  }, []);

  return (
    <>
      <AppHeader />
      <Grid>
        <Grid.Column width={3}>
          <Filter />
        </Grid.Column>
        <Grid.Column centered="true" width={10}>
          <CardList cards={cards} />
        </Grid.Column>
        <Grid.Column width={3}>
          <DeckList  />
        </Grid.Column>
      </Grid>
    </>
  );
};

Browse.propTypes = {
  cards: PropTypes.array.isRequired,
  getCards: PropTypes.object.isRequired,

  currentDeckId: PropTypes.string,
  deckActions: PropTypes.object.isRequired,
  globalDeckActions: PropTypes.object.isRequired,
};

Browse.defaultProps = {
  currentDeckId: null,
}

const mapState = state => {
  const session = getEntitiesSession(state);

  const { Card } = session;

  return {
    currentDeckId: state.currentDeck.currentDeckId,
    cards: Card.all().toModelArray(),
  };
};

const mapDispatch = dispatch => ({
  getCards: bindActionCreators(cardActions, dispatch),
  deckActions: bindActionCreators(rawDeckActions, dispatch),
  globalDeckActions: bindActionCreators(rawGlobalDeckActions, dispatch),
});

export default connect(
  mapState,
  mapDispatch,
)(Browse);
