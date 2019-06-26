import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Grid, Input, Button } from 'semantic-ui-react';

import autoCompleteActions from 'ducks/global/autocomplete';
import cardActions from 'ducks/Card';

const SearchCards = ({ autoCompleteList, autoComplete, search }) => {
  const [input, setInput] = useState('');
  const [waitForTyping, setWaitForTyping] = useState(setTimeout(() => {}, 0));

  const submitSearch = () => {
    search.searchCardsByName(input);
  };

  const setInputClearWait = event => {
    setInput(`${event.target.value}${event.key}`);
    clearTimeout(waitForTyping);
  };

  const loadAutoComplete = event => {
    if (!/^[a-z0-9]+$/i.test(event.key)) return;
    if (event.key === 'Enter') {
      submitSearch();
      return;
    }
    setInputClearWait(event);

    setWaitForTyping(
      setTimeout(() => {
        autoComplete.searchCardsAutoComplete(input);
      }, 500),
    );
  };

  const deleteInputCharacter = event => {
    // Backspace
    if (event.keyCode === 8) {
      setInput(input.slice(0, input.length - 1));
    }
  };

  return (
    <>
      <Grid>
        <Grid.Column width={9}>
          <Input
            list="cardNames"
            placeholder="Enter Card Name..."
            onKeyPress={loadAutoComplete}
            onKeyDown={deleteInputCharacter}
          />
          <datalist id="cardNames">
            {autoCompleteList.map(item => (
              <option onSelect={setInputClearWait} value={item} key={item} />
            ))}
          </datalist>
        </Grid.Column>
        <Grid.Column width={2}>
          <Button onClick={submitSearch}>Submit</Button>
        </Grid.Column>
      </Grid>
    </>
  );
};

SearchCards.propTypes = {
  autoCompleteList: PropTypes.array.isRequired,
  autoComplete: PropTypes.object.isRequired,
  search: PropTypes.object.isRequired,
};

const mapState = state => ({
  autoCompleteList: state.autoCompleteList,
});

const mapDispatch = dispatch => ({
  autoComplete: bindActionCreators(autoCompleteActions, dispatch),
  search: bindActionCreators(cardActions, dispatch),
});

export default connect(
  mapState,
  mapDispatch,
)(SearchCards);
