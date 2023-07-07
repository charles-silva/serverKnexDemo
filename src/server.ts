import fastify from 'fastify';
import { knex } from '../db/database';

const app = fastify();

app.get('/mensal', async () => {
  const result = await knex('periodo').select('*');
  return result;
});

app.get('/', async () => {
  return { message: "Rota não informada" };
});

app.listen({
  port: 3333
}).then(() => {
  console.log('🚀 Servidor iniciado com sucesso!');
})