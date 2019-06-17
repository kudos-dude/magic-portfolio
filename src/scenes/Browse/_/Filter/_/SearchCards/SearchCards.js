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
      }, 500),
    );
  };

  const submitSearch = () => {
    search.searchCardsByName(input);
  }

  return (
    <>
      <Input list="cardNames" placeholder="Enter Card Name..." onChange={loadAutoComplete} />
      <datalist id="cardNames">
        {autoCompleteList.map(item => (
          <option value={item} />
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
}

const mapState = state => ({
  autoCompleteList: state.autoCompleteList,
});

const mapDispatch = dispatch => ({
  autoComplete: bindActionCreators(autoCompleteActions, dispatch),
  search: bindActionCreators(cardActions, dispatch),
});

export default connect(mapState, mapDispatch)(SearchCards);
