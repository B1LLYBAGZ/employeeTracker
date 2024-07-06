const inquirer = require("inquirer");
const { addRole } = require("../queries/role");

const addRolePrompt = () => {
  return inquirer
    .prompt([
      {
        name: "title",
        message: "Enter the name of the role:",
      },
      {
        name: "salary",
        message: "Enter the salary for the role:",
      },
      {
        name: "department_id",
        message: "Enter the department id for the role:",
      },
    ])
    .then((answer) => {
      return addRole(answer.title, answer.salary, answer.department_id)
        .then(() => {
          console.log("Role added successfully.");
        })
        .catch((err) => {
          console.error(err);
        });
    });
};

module.exports = { addRolePrompt };
