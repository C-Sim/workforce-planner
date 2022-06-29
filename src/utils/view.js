const mysql = require("mysql2/promise");

const getDepartments = async (db) => {
  const [departments] = await db.query("SELECT * FROM departments");
  console.log(departments);
  console.table(
    departments
    // [departments.id, departments.department_name],
    // ["id", "department"]
  );
};

const getRoles = async (db) => {
  const roles = await db.query("SELECT * FROM roles");
  console.table(roles);
};

const getEmployees = async (db) => {
  const employees = await db.query("SELECT * FROM employees");
  console.table(employees);
};

const getEmployeesByManager = (db, manager) => {
  // SELECT * FROM employees WHERE manager_id = NOT NULL;
};

const getEmployeesByDepartment = (db, department) => {};

const getSpendByDepartment = (db) => {};

module.exports = {
  getDepartments,
  getRoles,
  getEmployees,
  getEmployeesByManager,
  getEmployeesByDepartment,
  getSpendByDepartment,
};
