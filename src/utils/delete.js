const inquirer = require("inquirer");
const { getDepartments, getRoles, getEmployees } = require("./view");

const deleteDepartment = () => {
  getDepartments();
  
    //   TODO fix what should be pulled from inquirer response
  departmentId = await inquirer.prompt(deleteDepartment)

  DELETE FROM departments WHERE id = departmentId
};

const deleteRole = () => {
  getRoles();

  //   TODO fix what should be pulled from inquirer response
  roleId = await inquirer.prompt(deleteRole)

  //   TODO - check if needs IN (1,2) for multiple entries
  DELETE FROM roles WHERE id = roleId
};

const deleteEmployee = () => {
  getEmployees();
  
  //   TODO fix what should be pulled from inquirer response
    employeeId = await inquirer.prompt(deleteEmployee)
    
    DELETE FROM employees WHERE id = employeeId
};

module.exports = {
  deleteDepartment,
  deleteRole,
  deleteEmployee,
};
