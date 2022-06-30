const chalk = require("chalk");
const mysql = require("mysql2/promise");

const {
  departmentList,
  roleList,
  employeeList,
  managerList,
} = require("./utils/helpers");

const confirmAction = {
  name: "action",
  type: "list",
  message: "What would you like to do?",
  choices: [
    {
      name: "OO View",
      value: "view",
    },
    {
      name: "+ Add",
      value: "add",
    },
    {
      name: "^ Update",
      value: "update",
    },
    {
      name: "X Delete",
      value: "delete",
    },
    {
      name: "<- Exit",
      value: "done",
    },
  ],
};

const viewOptions = {
  name: "viewOptions",
  type: "list",
  message: "What would you like to view?",
  choices: [
    {
      name: "All departments",
      value: "viewDepartments",
      short: "VD",
    },
    {
      name: "All roles",
      value: "viewRoles",
      short: "VR",
    },
    {
      name: "All employees",
      value: "viewEmployees",
      short: "VE",
    },
    {
      name: "Employees by manager",
      value: "viewEmployeesByManager",
      short: "VEM",
    },
    {
      name: "Employees by department",
      value: "viewEmployeesByDepartment",
      short: "VED",
    },
    {
      name: "Total budget spend by department",
      value: "viewSpendByDepartment",
      short: "VSD",
    },
  ],
};

const addOptions = {
  name: "addOptions",
  type: "list",
  message: "What would you like to add?",
  choices: [
    {
      name: "A department",
      value: "addDepartment",
      short: "AD",
    },
    {
      name: "A role",
      value: "addRole",
      short: "AR",
    },
    {
      name: "An employee",
      value: "addEmployee",
      short: "AE",
    },
  ],
};

const updateOptions = {
  name: "updateOptions",
  type: "list",
  message: "What would you like to update?",
  choices: [
    {
      name: "An employee role",
      value: "updateEmployeeRole",
      short: "UE",
    },
    {
      name: "An employee's manager",
      value: "updateEmployeeManager",
      short: "UM",
    },
  ],
};

const deleteOptions = {
  name: "deleteOptions",
  type: "list",
  message: "What would you like to delete?",
  choices: [
    {
      name: "A department",
      value: "deleteDepartment",
      short: "DD",
    },
    {
      name: "A role",
      value: "deleteRole",
      short: "DR",
    },
    {
      name: "An employee",
      value: "deleteEmployee",
      short: "DE",
    },
  ],
};

const departmentQuestions = [
  {
    name: "name",
    type: "input",
    message: "What is the name of the department?",
    validate: (name) => {
      if (name.length > 0) {
        return true;
      } else {
        console.log(chalk.bgRed("Please enter the department name"));
        return false;
      }
    },
  },
];

// TODO - list choices from db - map through all retrieved?
const roleQuestions = [
  {
    name: "role",
    type: "input",
    message: "What is the role title?",
    validate: (role) => {
      if (role.length > 0) {
        return true;
      } else {
        console.log(chalk.bgRed("Please enter a name"));
        return false;
      }
    },
  },
  {
    name: "salary",
    type: "number",
    message: "What is the salary for the role?",
    validate: (salary) => {
      if (salary > 0) {
        return true;
      } else {
        console.log(chalk.bgRed("Please enter a salary"));
        return false;
      }
    },
  },
  {
    name: "department",
    type: "list",
    message: "Which department does the role belong to?",
    // choices: departmentList(),
  },
];

// TODO - list choices from db - map through all retrieved?
const employeeQuestions = [
  {
    name: "firstName",
    type: "input",
    message: "What is the employee's first name?",
    validate: (firstName) => {
      if (firstName.length > 0) {
        return true;
      } else {
        console.log(chalk.bgRed("Please enter the employee's first name"));
        return false;
      }
    },
  },
  {
    name: "lastName",
    type: "input",
    message: "What is the employee's last name?",
    validate: (lastName) => {
      if (lastName.length > 0) {
        return true;
      } else {
        console.log(chalk.bgRed("Please enter the employee's last name"));
        return false;
      }
    },
  },
  {
    name: "role",
    type: "list",
    message: "What is the employee's role?",
    // choices: roleList(),
  },
  {
    name: "manager",
    type: "list",
    message: "Who is the employee's manager?",
    choices: [
      // employeeList(),
      {
        name: "They do not have a manager",
        value: "NULL",
        short: "NM",
      },
    ],
  },
];

module.exports = {
  confirmAction,
  viewOptions,
  addOptions,
  updateOptions,
  deleteOptions,
  departmentQuestions,
  roleQuestions,
  employeeQuestions,
};
