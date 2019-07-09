import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import uuid from 'uuid/v1'; 

import { getEntitiesSession } from 'ducks/entities/selectors';
import rawDeckActions from 'ducks/Deck';

import { Grid, Button, Header } from 'semantic-ui-react';

import SubmitDeck from './_/SubmitDeck';

const DeckList = ({ deckCards, deck, deckActions }) => {
  const clearDeck = () => {
    deckActions.clearDeck(deck);
  }

  return (
    <Grid stackable width={3}>
      <Grid.Row>
        <Header as='h3'>Current Deck</Header>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={8}>
          <SubmitDeck />
        </Grid.Column>
        <Grid.Column width={8}>
          <Button onClick={clearDeck}>Clear</Button>
        </Grid.Column>
      </Grid.Row>

      <ul>
        {/* Need unique key from uuid() because card id can be duplicated */}
        {deckCards.map(card => <li key={uuid()}>{card.name}</li>)}
      </ul>
    </Grid>
  );
};

DeckList.propTypes = {
  deck: PropTypes.object.isRequired,
  deckCards: PropTypes.array.isRequired,
  deckActions: PropTypes.object.isRequired,
};

const mapState = state => {
  const { currentDeckId } = state.currentDeck;
  const session = getEntitiesSession(state);

  const { Deck } = session;

  return {
    deck: currentDeckId ? Deck.withId(currentDeckId) : {},
    deckCards: currentDeckId ? Deck.withId(currentDeckId).cards: [],
  };
};

const mapDispatch = dispatch => ({
  deckActions: bindActionCreators(rawDeckActions, dispatch),
});

export default connect(mapState, mapDispatch)(DeckList);
