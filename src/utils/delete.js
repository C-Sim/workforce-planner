const inquirer = require("inquirer");

const mysql = require("mysql2/promise")

const { getDepartments, getRoles, getEmployees } = require("./view");

const deleteDepartment = (department) => {
  getDepartments();
  
    //   TODO fix what should be pulled from inquirer response

  DELETE FROM departments WHERE id = department.id
};

const deleteRole = (role) => {
  getRoles();

  //   TODO fix what should be pulled from inquirer response

  //   TODO - check if needs IN (1,2) for multiple entries
  DELETE FROM roles WHERE id = role.id
};

const deleteEmployee = (employee) => {
  getEmployees();
  
  //   TODO fix what should be pulled from inquirer response
    
  DELETE FROM employees WHERE id = employee.id
};

module.exports = {
  deleteDepartment,
  deleteRole,
  deleteEmployee,
};
