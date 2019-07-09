import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getEntitiesSession } from 'ducks/entities/selectors';
import rawDeckActions from 'ducks/Deck';

const Decks = ({ decks, deckActions }) => {
  useEffect(() => {
    deckActions.getAllDecks();
  }, [decks]);

  return <>{JSON.stringify(decks)}</>;
};

Decks.propTypes = {
  decks: PropTypes.array.isRequired,
  deckActions: PropTypes.object.isRequired,
};

const mapState = state => {
  const session = getEntitiesSession(state);

  const { Card } = session;

  return {
    currentDeckId: state.currentDeck.currentDeckId,
    cards: Card.all().toModelArray(),
  };
};

const mapDispatch = dispatch => ({
  deckActions: bindActionCreators(rawDeckActions, dispatch),
});

export default connect(mapState, mapDispatch)(Decks);