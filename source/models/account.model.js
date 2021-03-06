const db = require('../utils/db');

module.exports = {
  all: () => db.load('select * from user'),
  single: id => db.load(`select * from user where user_id = ${id}`),
  singleByUsername: async username =>
  {
    const rows = await db.load(`select* from user where username='${username}'`);
    if(rows.length===0)
    return null;

    return rows[0];
  },
  add: entity => db.add('user', entity),
  del: id => db.del('user', { user_id: id }),
  cartByUser: id => db.load(`select c.cart_id from user as u left join cart as c on u.user_id=c.customer_id where u.user_id =${id}`),

};
