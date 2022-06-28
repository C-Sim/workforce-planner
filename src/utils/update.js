const mysql = require("mysql2/promise");

const { getEmployees } = require("./view");

const updateEmployeeRole = (employee, role) => {
  getEmployees();

  //   TODO fix what should be pulled from inquirer response

  // UPDATE employees SET role_id = role.id WHERE id = employee.id
};

const updateEmployeeManager = (employee, manager) => {
  getEmployees();

  //   TODO fix what should be pulled from inquirer response

  // UPDATE employees SET manager_id = manager.id WHERE id = employee.id
};

module.exports = {
  updateEmployeeRole,
  updateEmployeeManager,
};
