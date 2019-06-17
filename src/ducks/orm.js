import { ORM } from 'redux-orm';

import CardModels from './Card/models';
import ListModels from './List/models';
import SetModels from './Set/models';


const orm = new ORM();
orm.register(
  CardModels.Card,
  ListModels.List,
  SetModels.Set,
);

export default orm;