import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getEntitiesSession } from 'ducks/entities/selectors';

import setActions from 'ducks/Set';
import cardActions from 'ducks/Card';

const Browse = ({ loadSets, loadCards, sets, cards }) => {
  useEffect(() => {
    loadSets.loadAllCardSets();
    loadCards.loadAllCards();
  }, []);

  return (
    <>
      <div>
        Fuck you
        {JSON.stringify(cards)}
      </div>
    </>
  );
};
Browse.propTypes = {
  loadSets: PropTypes.object.isRequired,
  loadCards: PropTypes.object.isRequired,
  sets: PropTypes.array.isRequired,
  cards: PropTypes.array.isRequired,
};

const mapState = state => {
  const session = getEntitiesSession(state);

  const { Set, Card } = session;

  return {
    sets: Set.all().toRefArray(),
    cards: Card.all().toRefArray(),
  };
};

const mapDispatch = dispatch => ({
  loadSets: bindActionCreators(setActions, dispatch),
  loadCards: bindActionCreators(cardActions, dispatch),
});

export default connect(
  mapState,
  mapDispatch,
)(Browse);
