DROP DATABASE IF EXISTS workforce_db;

CREATE DATABASE workforce_db;

USE workforce_db;

CREATE TABLE departments (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
--   PRIMARY KEY (id)
);

CREATE TABLE roles (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10, 2) NOT NULL,
  department_id INT NOT NULL,
  FOREIGN KEY (department_id) REFERENCES departments (id) ON DELETE CASCADE,
--   PRIMARY KEY (id)
);

CREATE TABLE employees (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  FOREIGN KEY (role_id) REFERENCES roles (id) ON DELETE CASCADE,
--   PRIMARY KEY (id)
);


-- SELECT 
-- roles.id,
-- roles.title AS role,
-- roles.salary,
-- departments.name AS department
-- FROM roles
-- INNER JOIN departments ON departments.id=role.department_id;

-- SELECT 
-- employees.id,
-- employees.first_name,
-- employees.last_name,
-- employees.manager_id,
-- roles.title AS role,
-- FROM employees
-- INNER JOIN roles ON roles.id=employees.role_id
