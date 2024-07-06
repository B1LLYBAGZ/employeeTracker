const { Client } = require("pg");
const fs = require("fs");
const path = require("path");
require("dotenv").config(); // Add this line to load environment variables

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

const schemaPath = path.join(__dirname, "../../seeds/schema.sql");
const seedPath = path.join(__dirname, "../../seeds/seeds.sql");

const initializeDatabase = async () => {
  try {
    const schema = fs.readFileSync(schemaPath, "utf8");
    const seed = fs.readFileSync(seedPath, "utf8");
    await client.connect();
    await client.query(schema);
    await client.query(seed);
    console.log("Database initialized.");
  } catch (err) {
    console.error("Error initializing database:", err);
  }
};

module.exports = { client, initializeDatabase };
