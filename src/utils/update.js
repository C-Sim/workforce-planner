const mysql = require("mysql2/promise");

const { getEmployees } = require("./view");

const updateEmployeeRole = async (db, employee, role) => {
  await getEmployees(db);

  await db.query(
    `UPDATE employees SET role_id = ${role.role} WHERE id = ${employee.employee}`
  );
};

const updateEmployeeManager = async (db, employee, manager) => {
  await getEmployees(db);

  await db.query(
    `UPDATE employees SET manager_id = ${manager.manager} WHERE id = ${employee.employee}`
  );
};

module.exports = {
  updateEmployeeRole,
  updateEmployeeManager,
};
