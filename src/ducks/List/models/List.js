import { Model, attr, many } from 'redux-orm';

export default class List extends Model {
  static modelName = 'List';

  static fields = {
    total_cards: attr(),
    has_more: attr(),
    next_page: attr(),
    data: many('Card'),
  }

  static parse(listData) {
    const { Card } = this.session;

    const list = {
      ...listData,
      data: listData.map(card => Card.parse(card)),
    }

    return this.upsert(list);
  }

  static toJson() {
    return {
      ...this.ref,
      data: this.data.map(card => card.toJson()),
    };
  }
}