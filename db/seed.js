const { client, getAllUsers, createUser } = require('./index');


// testing db
async function testDB() {
  try {
    client.connect();

    const users = await getAllUsers();
    console.log(users);
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
}

// this function should call a query which drops all tables from our database
async function dropTables() {
  try {
    await client.query(`
      DROP TABLE IF EXISTS users;
    `);
  } catch (error) {
    throw error; // we pass the error up to the function that calls dropTables
  }
}

// this function should call a query which creates all tables for our database 
async function createTables() {
  try {
    await client.query(`

    `);
  } catch (error) {
    throw error; // we pass the error up to the function that calls createTables
  }
}

async function rebuildDB() {
  try {
    client.connect();

    await dropTables();
    await createTables();
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
}

rebuildDB();