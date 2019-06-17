import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Input, Button } from 'semantic-ui-react';

import autoCompleteActions from 'ducks/global/autocomplete';
import cardActions from 'ducks/Card';

const SearchCards = ({ autoCompleteList, autoComplete, search }) => {
  const [input, setInput] = useState('');
  const [waitForTyping, setWaitForTyping] = useState(setTimeout(() => {}, 0));

  const loadAutoComplete = event => {
    setInput(event.target.value);

    clearTimeout(waitForTyping);

    setWaitForTyping(
      setTimeout(() => {
        autoComplete.searchCardsAutoComplete(input);
      }, 1000),
    );
  };

  const setInputClearWait = event => {
    setInput(event.target.value);
    clearTimeout(waitForTyping);
  };

  const deleteInputCharacter = event => {
    if (event.keyCode === 8) {
      setInput(input.slice(0, input.length - 1));
    }
  };

  const submitSearch = () => {
    search.searchCardsByName(input);
  };

  return (
    <>
      <Input
        list="cardNames"
        placeholder="Enter Card Name..."
        onKeyPress={loadAutoComplete}
        onKeyDown={deleteInputCharacter}
      />
      <datalist id="cardNames">
        {autoCompleteList.map(item => (
          <option onSelect={setInputClearWait} value={item} key={item.id} />
        ))}
      </datalist>
      <Button onClick={submitSearch}>Submit</Button>
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
