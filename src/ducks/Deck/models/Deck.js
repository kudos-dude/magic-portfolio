import { Model, attr, many } from 'redux-orm';

export default class Deck extends Model {
  static modelName = 'Deck';

  static fields = {
    id: attr(),
    cards: many('Card')
  }

  static parse(deckData) {
    return this.upsert(deckData);
  }

  static toJson() {
    return {
      ...this.ref,
    };
  }
}