const deleteDepartment = async (db, department) => {
  await db.query(`DELETE FROM departments WHERE id = ${department.department}`);
};

const deleteRole = async (db, role) => {
  await db.query(`DELETE FROM roles WHERE id = ${role.role}`);
};

const deleteEmployee = async (db, employee) => {
  await db.query(`DELETE FROM employees WHERE id = ${employee.employee}`);
};

module.exports = {
  deleteDepartment,
  deleteRole,
  deleteEmployee,
};
