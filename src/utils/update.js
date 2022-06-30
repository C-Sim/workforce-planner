const mysql = require("mysql2/promise");

const { getEmployees } = require("./view");

const updateEmployeeRole = async (db, employee, role) => {
  await getEmployees(db);

  // UPDATE employees SET role_id = role.id WHERE id = employee.id
};

const updateEmployeeManager = async (db, employee, manager) => {
  await getEmployees(db);

  //   TODO fix what should be pulled from inquirer response

  // UPDATE employees SET manager_id = manager.id WHERE id = employee.id
};

module.exports = {
  updateEmployeeRole,
  updateEmployeeManager,
};
