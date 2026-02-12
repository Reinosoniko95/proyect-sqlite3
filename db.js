const DataBase = require("better-sqlite3");
const db = new DataBase("./usuario.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS usuarios(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL
    );

    `);

module.exports = db;