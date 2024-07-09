const { Client } = require("pg");
const sequelize = require("./src/config/dbConfig");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const seedFilePath = path.resolve(__dirname, "db", "seed.sql");

// Create a new PostgreSQL client
const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const createDatabase = async () => {
  try {
    await client.connect();
    await client.query(`CREATE DATABASE ${process.env.DB_DATABASE}`);
    console.log(`Database ${process.env.DB_DATABASE} created successfully`);
  } catch (err) {
    if (err.code === "42P04") {
      console.log(`Database ${process.env.DB_DATABASE} already exists`);
    } else {
      console.error("Error creating database:", err);
      process.exit(1);
    }
  } finally {
    await client.end();
  }

  // Sync Sequelize models
  try {
    await sequelize.sync({ force: true });
    console.log("Database synced successfully");

    // Seed the database
    const seedSql = fs.readFileSync(seedFilePath, "utf8");
    await sequelize.query(seedSql);
    console.log("Database seeded successfully");
  } catch (err) {
    console.error("Error syncing or seeding database:", err);
    process.exit(1);
  } finally {
    await sequelize.close();
  }
};

createDatabase();
