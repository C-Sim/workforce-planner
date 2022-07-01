const createDepartment = async (db, departmentAnswers) => {
  await db.query(
    `INSERT INTO departments (department_name) VALUES ("${departmentAnswers.name}")`
  );
};

const createRole = async (db, roleAnswers) => {
  await db.query(
    `INSERT INTO roles (title, salary, department_id) VALUES ("${roleAnswers.role}", "${roleAnswers.salary}", ${roleAnswers.department})`
  );
};

const createEmployee = async (db, employeeAnswers) => {
  await db.query(
    `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("${employeeAnswers.firstName}", "${employeeAnswers.lastName}", ${employeeAnswers.role}, ${employeeAnswers.manager})`
  );
};

module.exports = {
  createDepartment,
  createRole,
  createEmployee,
};
