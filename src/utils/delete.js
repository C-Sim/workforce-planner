const mysql = require("mysql2/promise");

const { getDepartments, getRoles, getEmployees } = require("./view");

const deleteDepartment = async (db, department) => {
  await getDepartments(db);

  await db.query(`DELETE FROM departments WHERE id = ${department.department}`);
};

const deleteRole = async (role) => {
  await getRoles(db);

  await db.query(`DELETE FROM roles WHERE id = ${role.role}`);
};

const deleteEmployee = async (employee) => {
  await getEmployees(db);

  await db.query(`DELETE FROM employees WHERE id = ${employee.employee}`);
};

module.exports = {
  deleteDepartment,
  deleteRole,
  deleteEmployee,
};
