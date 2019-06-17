import { Model, attr } from 'redux-orm';

export default class Card extends Model {
  static modelName = 'Card';

  static fields = {
    id: attr(),
    oracle_id: attr(),
    multiverse_ids: attr(),
    tcgplayer_id: attr(),
    name: attr(),
    lang: attr(),
    released_at: attr(),
    uri: attr(),
    scryfall_uri: attr(),
    layout: attr(),
    highres_image: attr(),
    image_uris: attr(),
    mana_cost: attr(),
    cmc: attr(),
    type_line: attr(),
    oracle_text: attr(),
    power: attr(),
    toughness: attr(),
    colors: attr(),
    color_indicator: attr(),
    color_identity: attr(),
    legalities: attr(),
    games: attr(),
    reserved: attr(),
    foil: attr(),
    nonfoil: attr(),
    oversized: attr(),
    promo: attr(),
    reprint: attr(),
    variation: attr(),
    set: attr(),
    set_name: attr(),
    set_type: attr(),
    set_uri: attr(),
    set_search_uri: attr(),
    scryfall_set_uri: attr(),
    rulings_uri: attr(),
    prints_search_uri: attr(),
    collector_number: attr(),
    digital: attr(),
    rarity: attr(),
    illustration_id: attr(),
    card_back_id: attr(),
    artist: attr(),
    border_color: attr(),
    frame: attr(),
    full_art: attr(),
    textless: attr(),
    booster: attr(),
    story_spotlight: attr(),
    promo_types: attr(),
    prices: attr(),
    related_uris: attr(),
    purchase_uris: attr(),
  }

  static parse(cardData) {
    return this.upsert(cardData);
  }

  static toJson() {
    return {
      ...this.ref,
    };
  }
}