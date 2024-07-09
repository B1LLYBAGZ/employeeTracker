const inquirer = require("inquirer");

const rolePrompt = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Enter the role title:",
    },
    {
      type: "input",
      name: "salary",
      message: "Enter the role salary:",
    },
    {
      type: "input",
      name: "department_id",
      message: "Enter the department ID for this role:",
    },
  ]);
  return answers;
};

module.exports = rolePrompt;
