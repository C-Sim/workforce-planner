const mysql = require("mysql2/promise");
const inquirer = require("inquirer");

const { getDepartments, getRoles, getEmployees } = require("./view");

const Employee = require("../lib/Employee");
const Department = require("../lib/Department");
const Role = require("../lib/Role");

const {
  departmentQuestions,
  roleQuestions,
  employeeQuestions,
} = require("../questions");

const departmentInfo = getDepartments();
const roleInfo = getRoles();
const employeeInfo = getEmployees();

const createDepartment = (departmentAnswers) => {
  //   console.log(departmentAnswers);

  const department = new Department(departmentAnswers.name);

  //   departmentInfo.push(department);

  //   console.log(departmentInfo);

  // INSERT INTO departments (name) VALUES (departmentInfo);
};

const createRole = (roleAnswers) => {
  const role = new Role(
    roleAnswers.title,
    roleAnswers.salary,
    roleAnswers.department
  );

  //   roleInfo.push(role);

  // INSERT INTO role (title, salary, department_id) VALUES (roleInfo);
};

const createEmployee = (employeeAnswers) => {
  const employee = new Employee(
    employeeAnswers.firstName,
    employeeAnswers.lastName,
    employeeAnswers.role,
    employeeAnswers.manager
  );

  //   employeeInfo.push(employee);

  // INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (employeeInfo);
};

module.exports = {
  createDepartment,
  createRole,
  createEmployee,
};
