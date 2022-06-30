const mysql = require("mysql2/promise");
const inquirer = require("inquirer");

const { getDepartments, getRoles, getEmployees } = require("./view");

const createDepartment = async (db, departmentAnswers) => {
  await db.query(
    `INSERT INTO departments (department_name) VALUES ("${departmentAnswers.name}")`
  );

  await getDepartments(db);
};

// TODO fix role id
const createRole = async (db, roleAnswers) => {
  await db.query(
    `INSERT INTO roles (title, salary, department_id) VALUES ("${roleAnswers.role}", "${roleAnswers.salary}", ${roleAnswers.department})`
  );

  await getRoles(db);
};

// TODO fix manager id
const createEmployee = async (db, employeeAnswers) => {
  console.log(employeeAnswers);

  await db.query(
    `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("${employeeAnswers.firstName}", "${employeeAnswers.lastName}", ${employeeAnswers.role}, ${employeeAnswers.manager})`
  );

  await getEmployees(db);
};

module.exports = {
  createDepartment,
  createRole,
  createEmployee,
};
