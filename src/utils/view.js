const mysql = require("mysql2/promise");

const getDepartments = async (db) => {
  const [departments] = await db.query(
    "SELECT * FROM departments ORDER BY department_name"
  );
  return departments;
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
  return roles;
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
    ORDER BY e.last_name;
  `);
  return employees;
};

const getEmployeesByManager = async (db, manager) => {
  const [employees] = await db.query(
    `SELECT e.id,
    CONCAT(e.first_name,' ',
           e.last_name) AS employee,
           r.salary, r.title,
           d.department_name,
          CONCAT(m.first_name,' ',
           m.last_name) AS manager
    FROM employees AS e
    
      LEFT JOIN employees AS m 
      ON e.manager_id = m.id INNER JOIN roles r ON e.role_id = r.id LEFT JOIN departments d ON r.department_id = d.id
      WHERE m.id = ${manager.manager}
      ORDER BY e.last_name;
  `
  );

  return employees;
};

const getEmployeesByDepartment = async (db, department) => {
  const [employees] = await db.query(
    `SELECT e.id,
    CONCAT(e.first_name,' ',
           e.last_name) AS employee,
           r.salary, r.title,
           d.department_name,
          CONCAT(m.first_name,' ',
           m.last_name) AS manager
    FROM employees AS e
    
      LEFT JOIN employees AS m 
      ON e.manager_id = m.id INNER JOIN roles r ON e.role_id = r.id LEFT JOIN departments d ON r.department_id = d.id
      WHERE d.id = ${department.department}
      ORDER BY e.last_name;
  `
  );

  return employees;
};

const getSpendByDepartment = async (db) => {};

module.exports = {
  getDepartments,
  getRoles,
  getEmployees,
  getEmployeesByManager,
  getEmployeesByDepartment,
  getSpendByDepartment,
};
