const { client } = require("../config/dbConfig");

const viewDepartments = () => {
  return client.query("SELECT * FROM department");
};

const addDepartment = (name) => {
  return client.query("INSERT INTO department (name) VALUES ($1)", [name]);
};

module.exports = { viewDepartments, addDepartment };
