import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getEntitiesSession } from 'ducks/entities/selectors';

import { Grid } from 'semantic-ui-react';

import cardActions from 'ducks/Card';

import CardList from './_/CardList';

const Browse = ({ cards, getCards }) => {
  useEffect(() => {
    getCards.loadAllCards();
  }, [])

  return (
    <>
      {/* <AppHeader /> */}
      <Grid>
        <Grid.Column floated="left" width={5}>
          {/* <Filter /> */}
        </Grid.Column>
        <Grid.Column centered columns={2} width={50}>
          <CardList cards={cards} />
        </Grid.Column>
      </Grid>
    </>
  );
};

Browse.propTypes = {

}

const mapState = state => {
  const session = getEntitiesSession(state);

  const { Card } = session;

  return {
    cards: Card.all().toModelArray(),
  };
};

const mapDispatch = dispatch => ({
  getCards: bindActionCreators(cardActions, dispatch),
})

export default connect(mapState, mapDispatch)(Browse);
