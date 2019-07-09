import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Grid } from 'semantic-ui-react';

import DeckModels from 'ducks/Deck/models';
import { getEntitiesSession } from 'ducks/entities/selectors';
import rawDeckActions from 'ducks/Deck';

import List from 'shared/CardList';

// const PAGE_SIZE = 24;

const CardList = ({ cards, currentDeck, deckActions }) => {
  // const [pageNumber, setActivePage] = useState(1);

  const addCard = card => () => {
    const currentDeckJson = currentDeck.ref;
    const currentDeckCards = currentDeckJson.cards;
    const newListOfCards = currentDeckCards.concat([card]);
    const deckWithNewCard = {
      ...currentDeckJson,
      cards: newListOfCards,
    };
    
    deckActions.addCard(deckWithNewCard);
  }

  const removeCard = card => () => {
    const currentDeckJson = currentDeck.ref;
    const cardListWithCardRemoved = currentDeckJson.cards.filter(deckCard => deckCard.id !== card.id);
    const deckWithCardRemoved = {
      ...currentDeckJson,
      cards: cardListWithCardRemoved,
    }

    deckActions.removeCard(deckWithCardRemoved);
  }

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
      <List cards={cards} addCard={addCard} removeCard={removeCard} />
    </Grid>
  );
};

CardList.propTypes = {
  cards: PropTypes.array.isRequired,
  currentDeck: PropTypes.object.isRequired,
  deckActions: PropTypes.object.isRequired,
};

const mapState = state => {
  const { currentDeckId } = state.currentDeck;
  const session = getEntitiesSession(state);

  const { Deck } = session;

  return {
    currentDeck: Deck.withId(currentDeckId),
  };
}

const mapDispatch = dispatch => ({
  deckActions: bindActionCreators(rawDeckActions, dispatch),
})

export default connect(mapState, mapDispatch)(CardList);
