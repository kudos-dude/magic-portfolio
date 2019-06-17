import { Model, attr } from 'redux-orm';

export default class Set extends Model {
  static modelName = 'Set';

  static fields = {
    id: attr(),
    code: attr(),
    mtgo_code: attr(),
    tcgplayer_id: attr(),
    name: attr(),
    uri: attr(),
    scryfall_uri: attr(),
    search_uri: attr(),
    released_at: attr(),
    set_type: attr(),
    card_count: attr(),
    digital: attr(),
    foil_only: attr(),
    block_code: attr(),
    block: attr(),
    icon_svg_uri: attr(),
  }

  static parse(setData) {
    return this.upsert(setData);
  }

  static toJson() {
    return {
      ...this.ref,
    };
  }
}