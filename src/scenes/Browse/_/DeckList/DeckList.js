import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getEntitiesSession } from 'ducks/entities/selectors';

import { Grid } from 'semantic-ui-react';

import CardList from 'shared/CardList';

const DeckList = ({ deckCards }) => {
  return (
    <Grid stackable width={3}>
      <CardList cards={deckCards} />
    </Grid>
  );
};

DeckList.propTypes = {
  deckCards: PropTypes.array.isRequired,
};

const mapState = state => {
  const { currentDeckId } = state.currentDeck;
  const session = getEntitiesSession(state);

  const { Deck } = session;

  return {
    deckCards: currentDeckId ? Deck.withId(currentDeckId).cards.toModelArray() : [],
  };
};

export default connect(mapState)(DeckList);
