# Employee Tracker

Employee Tracker is a command-line application that allows you to manage a company's employee database using Node.js, Inquirer, and Sequelize with PostgreSQL.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Models](#models)
- [Prompts](#prompts)
- [Database Configuration](#database-configuration)
- [Dependencies](#dependencies)
- [Video Demo](#video-demo)
- [Contacts](#contacts)
- [License](#license)

## Introduction

Managing a company's employee database can be challenging. Employee Tracker simplifies this task by providing a command-line interface that allows you to easily add, view, and manage departments, roles, and employees.

## Features

- View all departments, roles, and employees.
- Add new departments, roles, and employees.
- Seamless integration with PostgreSQL using Sequelize ORM.
- User-friendly prompts for data input.
- Relational data management between departments, roles, and employees.

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd employee-tracker
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up the database:**

   - Make sure you have PostgreSQL installed and running.
   - Create a `.env` file in the root directory and add your PostgreSQL configuration:
     ```
     DB_USER=your_postgres_user
     DB_HOST=localhost
     DB_DATABASE=tracker_db
     DB_PASSWORD=your_postgres_password
     DB_PORT=5432
     ```

4. **Run the application:**
   ```bash
   node server.js
   ```

## Usage

1. **Start the application:**
   ```bash
   node server.js
   ```
2. **Follow the prompts** to:
   - View all departments
   - Add a department
   - View all roles
   - Add a role
   - View all employees
   - Add an employee
   - Exit the application

## File Structure

```
employee-tracker/
├── node_modules/
├── db/
│   └── schema.sql
├── src/
│   ├── config/
│   │   └── dbConfig.js
│   ├── models/
│   │   ├── Department.js
│   │   ├── Employee.js
│   │   └── Role.js
│   ├── prompts/
│   │   ├── departmentPrompt.js
│   │   ├── employeePrompt.js
│   │   └── rolePrompt.js
│   └── queries/
│       ├── department.js
│       ├── employee.js
│       └── role.js
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

## Models

- **Department:**

  - `id`: Primary key
  - `name`: Name of the department

- **Role:**

  - `id`: Primary key
  - `title`: Role title
  - `salary`: Role salary
  - `department_id`: Foreign key referencing `Department`

- **Employee:**
  - `id`: Primary key
  - `first_name`: Employee's first name
  - `last_name`: Employee's last name
  - `role_id`: Foreign key referencing `Role`
  - `manager_id`: ID of the employee's manager (nullable)

## Prompts

- **departmentPrompt.js**: Prompts for adding a department.
- **employeePrompt.js**: Prompts for adding an employee, including selecting a role from existing roles.
- **rolePrompt.js**: Prompts for adding a role, including selecting a department from existing departments.

## Database Configuration

Database configuration is handled by `sequelize` and the configuration file is located at `src/config/dbConfig.js`. Ensure your PostgreSQL credentials are correctly set in the `.env` file.

## Dependencies

- Node.js
- Sequelize
- Inquirer
- PostgreSQL
- figlet

## Video Demo

Watch the video demonstration of the Employee Tracker application [here](#).

## Contacts

For any inquiries or further information, please contact:

- **Project Maintainer**: [B1LLY](mailto:098williamhogan@gmail.com)
- **GitHub**: [B1LLYBAGZ](https://github.com/B1LLYBAGZ)

## License

None
