const db = require('./db');
const User = require('./Models/User');

const sync = async () => {
  await db.sync({ force: true });

  const users = [
    {name: 'Shruti', email: 'shruti@email.com', password: 'SHRUTI'},
    {name: 'Oscar', email: 'oscar@email.com', password: 'OSCAR'}];

  const [Shruti, Oscar] = await Promise.all(users.map( user => User.create(user)));
};

module.exports = sync;
