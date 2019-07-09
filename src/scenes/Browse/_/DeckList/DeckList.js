import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import uuid from 'uuid/v1'; 

import { getEntitiesSession } from 'ducks/entities/selectors';

import { Grid } from 'semantic-ui-react';

import CardList from 'shared/CardList';

const DeckList = ({ deckCards }) => {
  return (
    <Grid stackable width={3}>
      <ul>
        {/* Need unique key from uuid() because card id can be duplicated */}
        {deckCards.map(card => <li key={uuid()}>{card.name}</li>)}
      </ul>
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
    deckCards: currentDeckId ? Deck.withId(currentDeckId).cards: [],
  };
};

export default connect(mapState)(DeckList);
