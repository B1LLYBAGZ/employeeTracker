const inquirer = require("inquirer");

const employeePrompt = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "first_name",
      message: "Enter the employee's first name:",
    },
    {
      type: "input",
      name: "last_name",
      message: "Enter the employee's last name:",
    },
    {
      type: "input",
      name: "role_id",
      message: "Enter the employee's role ID:",
    },
    {
      type: "input",
      name: "manager_id",
      message: "Enter the employee's manager ID:",
    },
  ]);
  return answers;
};

module.exports = employeePrompt;
