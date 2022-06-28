const mysql = require("mysql2/promise");

// USE workforce_db;

const getDepartments = (db) => {
  // SELECT * FROM departments;
  // console.table.....
};

const getRoles = (db) => {
  // SELECT * FROM roles;
};

const getEmployees = (db) => {
  // SELECT * FROM employees;
};

const getEmployeesByManager = (db, manager) => {
  // SELECT * FROM employees WHERE id = employeeId;
};

const getEmployeesByDepartment = (db, department) => {};

const getSpendByDepartment = (db) => {};

module.exports = {
  getDepartments,
  getRoles,
  getEmployees,
  getEmployeesByManager,
  getEmployeesByDepartment,
  getSpendByDepartment,
};
