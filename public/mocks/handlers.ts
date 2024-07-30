import { rest } from 'msw';
import DbService from './db';

const db = new DbService();

export const handlers = [
  rest.get('/users', (_req, res, ctx) => {
    const users = db.getAllUsers();
    return res(ctx.json(users));
  }),
];
