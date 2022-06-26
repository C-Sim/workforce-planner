const chalk = require("chalk");
const mysql = require("mysql2/promise")

const { getDepartments, getRoles, getEmployees } = require("./view");

SELECT * FROM departments;
SELECT * FROM roles;
SELECT * FROM employees;


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

// TODO - list choices from db - map through all retrieved?
const chooseDepartment = {
    name: "department",
    type: "list",
    message: "Which department?"
    choices: [
     {
        name: departments.name,
        id: departments.id
     }
    ]
};


const chooseRole = {
    name: "role",
    type: "list",
    message: "Which role?"
    choices: [
     {
        name: roles.title,
        id: roles.id
     }
    ]
};

const chooseEmployee = {
    name: "employee",
    type: "list",
    message: "Which employee?"
    choices: [
     {
        name: employee.first_name employee.last_name,
        id: employees.id,
     }
    ]
};

const chooseManager = {
    name: "manager",
    type: "list",
    message: "Which manager?"
    choices: [
     {
        name: employee.first_name employee.last_name,
        id: employees.manager_id,
     }
    ]
};

// TODO - correct questions
const departmentQuestions = [
  {
    name: "name",
    type: "input",
    message: "What is the department's name?",
    validate: (name) => {
      if (name.length > 0) {
        return true;
      } else {
        console.log(chalk.bgRed("Please enter a name"));
        return false;
      }
    },
  },
  {
    name: "id",
    type: "input",
    message: "What is the department's employee ID number?",
    validate: (id) => {
      if (id.length > 0) {
        return true;
      } else {
        console.log(chalk.bgRed("Please enter an employee ID"));
        return false;
      }
    },
  },
  {
    name: "email",
    type: "input",
    message: "What is the department's email address?",
    validate: (email) => {
      valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

      if (valid) {
        return true;
      } else {
        console.log(chalk.bgRed("Please enter a valid email address"));
        return false;
      }
    },
  },
  {
    name: "gitHub",
    type: "input",
    message: "What is the department's GitHub username?",
    validate: (gitHub) => {
      if (gitHub.length > 0) {
        return true;
      } else {
        console.log(chalk.bgRed("Please enter a GitHub username"));
        return false;
      }
    },
  },
];

const roleQuestions = [
  {
    name: "name",
    type: "input",
    message: "What is the role's name?",
    validate: (name) => {
      if (name.length > 0) {
        return true;
      } else {
        console.log(chalk.bgRed("Please enter a name"));
        return false;
      }
    },
  },
  {
    name: "id",
    type: "input",
    message: "What is the role's employee ID number?",
    validate: (id) => {
      if (id.length > 0) {
        return true;
      } else {
        console.log(chalk.bgRed("Please enter an employee ID"));
        return false;
      }
    },
  },
  {
    name: "email",
    type: "input",
    message: "What is the role's email address?",
    validate: (email) => {
      valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

      if (valid) {
        return true;
      } else {
        console.log(chalk.bgRed("Please enter a valid email address"));
        return false;
      }
    },
  },
  {
    name: "school",
    type: "input",
    message: "What school does the role attend?",
    validate: (school) => {
      if (school.length > 0) {
        return true;
      } else {
        console.log(chalk.bgRed("Please enter a school"));
        return false;
      }
    },
  },
];

const employeeQuestions = [
  {
    name: "teamName",
    type: "input",
    message: "What is your team name?",
    default: "The Team",
  },
  {
    name: "name",
    type: "input",
    message: "What is your name?",
    validate: (name) => {
      if (name.length > 0) {
        return true;
      } else {
        console.log(chalk.bgRed("Please enter your name"));
        return false;
      }
    },
  },
  {
    name: "id",
    type: "input",
    message: "What is your employee ID number?",
    validate: (id) => {
      if (id.length > 0) {
        return true;
      } else {
        console.log(chalk.bgRed("Please enter your employee ID"));
        return false;
      }
    },
  },
  {
    name: "email",
    type: "input",
    message: "What is your email address?",
    validate: (email) => {
      valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

      if (valid) {
        return true;
      } else {
        console.log(chalk.bgRed("Please enter a valid email address"));
        return false;
      }
    },
  },
  {
    name: "officeNumber",
    type: "input",
    message: "What is your office number?",
    validate: (officeNumber) => {
      if (officeNumber.length > 0) {
        return true;
      } else {
        console.log(chalk.bgRed("Please enter your office number"));
        return false;
      }
    },
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
