DROP DATABASE IF EXISTS workforce_db;

CREATE DATABASE workforce_db;

USE workforce_db;

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10, 2) NOT NULL,
  department_id INT NOT NULL,
  FOREIGN KEY (department_id) REFERENCES departments (id) ON DELETE CASCADE,
  PRIMARY KEY (id)
);

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  FOREIGN KEY (role_id) REFERENCES roles (id) ON DELETE CASCADE,
  FOREIGN KEY (manager_id) REFERENCES employees (id) ON DELETE SET NULL,
  PRIMARY KEY (id)
);


SELECT 
roles.id,
roles.title AS role,
roles.salary,
departments.department_name AS department
FROM roles
INNER JOIN departments ON departments.id=roles.department_id;

SELECT CONCAT(E.FIRST_NAME,' ',
       E.LAST_NAME) AS 'USER',
       R.SALARY, R.TITLE,
       D.DEPT_NAME,
      CONCAT( M.FIRST_NAME,' ',
       M.LAST_NAME) AS MANAGER
FROM EMPLOYEE AS E
  JOIN EMPLOYEE AS M 
  ON E.MANAGER_ID = M.ID INNER JOIN ROLE R ON E.ROLE_ID = R.ID LEFT JOIN DEPARTMENT D ON R.DEPARTMENT_ID = D.ID ;
