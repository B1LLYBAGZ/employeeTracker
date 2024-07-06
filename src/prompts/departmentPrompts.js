const inquirer = require("inquirer");
const { addDepartment } = require("../queries/department");

const addDepartmentPrompt = () => {
  return inquirer
    .prompt([
      {
        name: "name",
        message: "Enter the name of the department:",
      },
    ])
    .then((answer) => {
      return addDepartment(answer.name)
        .then(() => {
          console.log("Department added successfully.");
        })
        .catch((err) => {
          console.error(err);
        });
    });
};

module.exports = { addDepartmentPrompt };
