const inquirer = require("inquirer");
const { client, initializeDatabase } = require("./config/dbConfig");
const { viewDepartments } = require("./queries/department");
const { viewRoles } = require("./queries/role");
const { viewEmployees } = require("./queries/employee");
const { addDepartmentPrompt } = require("./prompts/departmentPrompts");
const { addRolePrompt } = require("./prompts/rolePrompts");
const {
  addEmployeePrompt,
  updateEmployeeRolePrompt,
} = require("./prompts/employeePrompts");

initializeDatabase().then(() => {
  const mainMenu = () => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "action",
          message: "What would you like to do?",
          choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee role",
            "Exit",
          ],
        },
      ])
      .then((answer) => {
        switch (answer.action) {
          case "View all departments":
            viewDepartments()
              .then((res) => {
                console.table(res.rows);
                mainMenu();
              })
              .catch((err) => {
                console.error(err);
              });
            break;
          case "View all roles":
            viewRoles()
              .then((res) => {
                console.table(res.rows);
                mainMenu();
              })
              .catch((err) => {
                console.error(err);
              });
            break;
          case "View all employees":
            viewEmployees()
              .then((res) => {
                console.table(res.rows);
                mainMenu();
              })
              .catch((err) => {
                console.error(err);
              });
            break;
          case "Add a department":
            addDepartmentPrompt().then(() => mainMenu());
            break;
          case "Add a role":
            addRolePrompt().then(() => mainMenu());
            break;
          case "Add an employee":
            addEmployeePrompt().then(() => mainMenu());
            break;
          case "Update an employee role":
            updateEmployeeRolePrompt().then(() => mainMenu());
            break;
          case "Exit":
            client.end();
            process.exit();
            break;
        }
      });
  };

  mainMenu();
});
