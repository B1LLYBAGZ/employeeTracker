const inquirer = require("inquirer");
const { addEmployee, updateEmployeeRole } = require("../queries/employee");

const addEmployeePrompt = () => {
  return inquirer
    .prompt([
      {
        name: "first_name",
        message: "Enter the first name of the employee:",
      },
      {
        name: "last_name",
        message: "Enter the last name of the employee:",
      },
      {
        name: "role_id",
        message: "Enter the role id for the employee:",
      },
      {
        name: "manager_id",
        message: "Enter the manager id for the employee (if any):",
      },
    ])
    .then((answer) => {
      return addEmployee(
        answer.first_name,
        answer.last_name,
        answer.role_id,
        answer.manager_id
      )
        .then(() => {
          console.log("Employee added successfully.");
        })
        .catch((err) => {
          console.error(err);
        });
    });
};

const updateEmployeeRolePrompt = () => {
  return inquirer
    .prompt([
      {
        name: "employee_id",
        message: "Enter the employee id to update:",
      },
      {
        name: "new_role_id",
        message: "Enter the new role id for the employee:",
      },
    ])
    .then((answer) => {
      return updateEmployeeRole(answer.employee_id, answer.new_role_id)
        .then(() => {
          console.log("Employee role updated successfully.");
        })
        .catch((err) => {
          console.error(err);
        });
    });
};

module.exports = { addEmployeePrompt, updateEmployeeRolePrompt };
