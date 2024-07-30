import { factory, primaryKey } from '@mswjs/data';
import type { FactoryAPI } from '@mswjs/data/lib/glossary';

type User = {
  id: string;
  name: string;
  email: string;
};

export default class DbService {
  declare db: FactoryAPI<{ user: User }>;
  constructor() {
    this.db = factory({
      user: {
        id: primaryKey(String),
        name: String,
        email: String,
      },
    });

    //initial data
    this.db.user.create({
      id: 1,
      name: 'Ivan',
      email: 'iarroyo@copyright.com',
    });
    this.db.user.create({
      id: 2,
      name: 'Aleksandr',
      email: 'akanunnikov@copyright.com',
    });
  }

  getAllUsers() {
    return this.db.user.getAll();
  }
}
