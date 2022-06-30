const mysql = require("mysql2/promise");

const getDepartments = async (db) => {
  const [departments] = await db.query("SELECT * FROM departments");
  console.table(departments);
  // return departments;
};

const getRoles = async (db) => {
  const [roles] = await db.query(`SELECT 
  roles.id,
  roles.title AS role,
  roles.salary,
  departments.department_name AS department
  FROM roles
  INNER JOIN departments ON departments.id=roles.department_id
  ORDER BY department;`);
  console.table(roles);
};

const getEmployees = async (db) => {
  const [employees] = await db.query(`SELECT e.id,
  CONCAT(e.first_name,' ',
         e.last_name) AS employee,
         r.salary, r.title,
         d.department_name,
        CONCAT(m.first_name,' ',
         m.last_name) AS manager
  FROM employees AS e
    LEFT JOIN employees AS m 
    ON e.manager_id = m.id INNER JOIN roles r ON e.role_id = r.id LEFT JOIN departments d ON r.department_id = d.id
  `);
  console.table(employees);
};

const getEmployeesByManager = async (db, manager) => {
  // SELECT * FROM employees WHERE manager_id = NOT NULL;
};

const getEmployeesByDepartment = async (db, department) => {};

const getSpendByDepartment = async (db) => {};

module.exports = {
  getDepartments,
  getRoles,
  getEmployees,
  getEmployeesByManager,
  getEmployeesByDepartment,
  getSpendByDepartment,
};
