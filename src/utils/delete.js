const mysql = require("mysql2/promise");

const { getDepartments, getRoles, getEmployees } = require("./view");

const deleteDepartment = async (db, department) => {
  await getDepartments(db);
  await db.query(
    `DELETE FROM departments WHERE departments.id = department.id`
  );

  await getDepartments(db);
  //
};

const deleteRole = (role) => {
  getRoles();

  //   TODO fix what should be pulled from inquirer response

  //   TODO - check if needs IN (1,2) for multiple entries
  // DELETE FROM roles WHERE id = role.id
};

const deleteEmployee = (employee) => {
  getEmployees();

  //   TODO fix what should be pulled from inquirer response

  // DELETE FROM employees WHERE id = employee.id
};

module.exports = {
  deleteDepartment,
  deleteRole,
  deleteEmployee,
};
