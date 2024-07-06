const inquirer = require("inquirer");
const figlet = require("figlet");
const { client, initializeDatabase } = require("./src/config/dbConfig");
const { viewDepartments } = require("./src/queries/department");
const { viewRoles } = require("./src/queries/role");
const { viewEmployees } = require("./src/queries/employee");
const { addDepartmentPrompt } = require("./src/prompts/departmentPrompts");
const { addRolePrompt } = require("./src/prompts/rolePrompts");
const {
  addEmployeePrompt,
  updateEmployeeRolePrompt,
} = require("./src/prompts/employeePrompts");

initializeDatabase().then(() => {
  figlet("Employee Tracker", (err, data) => {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }

    const mainMenu = () => {
      console.clear();
      console.log(data); // Display the logo
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
});
