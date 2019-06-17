const BASE_URL = 'https://api.scryfall.com/';

export const ALL_CARDS_URL = `${BASE_URL}cards`;
export const SEARCH_CARDS_URL = `${BASE_URL}cards/search`;
export const SEARCH_CARDS_AUTOCOMPLETE = `${BASE_URL}cards/autocomplete`;

export const ALL_SETS_URL = `${BASE_URL}sets`;
export const setCodeURL =  setCode =>`${BASE_URL}sets/${setCode}`;

