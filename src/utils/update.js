const updateEmployeeRole = async (db, employee, role) => {
  await db.query(
    `UPDATE employees SET role_id = ${role.role} WHERE id = ${employee.employee}`
  );
};

const updateEmployeeManager = async (db, employee, manager) => {
  await db.query(
    `UPDATE employees SET manager_id = ${manager.manager} WHERE id = ${employee.employee}`
  );
};

module.exports = {
  updateEmployeeRole,
  updateEmployeeManager,
};
