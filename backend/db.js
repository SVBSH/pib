const { Sequelize } = require('sequelize');

db_name = 'mydatabase';
db_password = 'mypassword';
db_user = 'myuser';
db_port = 60000;

const sequelize = new Sequelize(db_name, db_user, db_password, {
  host: '127.0.0.1',
  port: db_port,
  dialect: 'postgres',
});

async function testQuery() {
  try {
    await sequelize.authenticate();
    console.log('Spojenie s databázou úspešné.');

    // Vykonať testovaciu SQL query
    const result = await sequelize.query('SELECT version();');

    // Vypísať výsledok
    console.log('Verzia PostgreSQL:', result[0][0].version);
  } catch (error) {
    console.error('Chyba pri vykonávaní testovacej query:', error);
  } finally {
    // Ukončiť spojenie s databázou
    await sequelize.close();
  }
}

testQuery();
