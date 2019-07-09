import { Model, attr } from 'redux-orm';

export default class Deck extends Model {
  static modelName = 'Deck';

  static fields = {
    id: attr(),
    cards: attr(),
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