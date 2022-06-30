const mysql = require("mysql2/promise");
const inquirer = require("inquirer");

const { getDepartments, getRoles, getEmployees } = require("./view");

// const Employee = require("../lib/Employee");
// const Department = require("../lib/Department");
// const Role = require("../lib/Role");

const {
  departmentQuestions,
  roleQuestions,
  employeeQuestions,
} = require("../questions");

const createDepartment = async (db, departmentAnswers) => {
  await db.query(
    `INSERT INTO departments (department_name) VALUES ("${departmentAnswers.name}")`
  );

  await getDepartments(db);
};

// TODO fix role id
const createRole = async (db, roleAnswers) => {
  await db.query(
    `INSERT INTO roles (title, salary, department_id) VALUES ("${roleAnswers.role}", "${roleAnswers.role}", ${roleAnswers.department.id})`
  );

  await getRoles(db);
};

// TODO fix manager id
const createEmployee = async (db, employeeAnswers) => {
  await db.query(
    `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("${employeeAnswers.firstName}", "${employeeAnswers.lastName}", ${employeeAnswers.role.id}, ${employeeAnswers.manager.id})`
  );

  await getRoles(db);
};

module.exports = {
  createDepartment,
  createRole,
  createEmployee,
};
