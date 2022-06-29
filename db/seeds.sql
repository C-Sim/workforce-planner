USE workforce_db;

INSERT INTO departments (department_name) VALUES ("Finance");
INSERT INTO departments (department_name) VALUES ("HR");
INSERT INTO departments (department_name) VALUES ("IT");
INSERT INTO departments (department_name) VALUES ("Marketing");
INSERT INTO departments (department_name) VALUES ("Operations");

INSERT INTO roles (title, salary, department_id) VALUES ("Finance Analyst", "20000", 1);
INSERT INTO roles (title, salary, department_id) VALUES ("HR Business Partner", "25000", 2);
INSERT INTO roles (title, salary, department_id) VALUES ("Junior Software Developer", "30000", 3);
INSERT INTO roles (title, salary, department_id) VALUES ("Senior Software Developer", "40000", 3);
INSERT INTO roles (title, salary, department_id) VALUES ("Tech Lead", "50000", 3);
INSERT INTO roles (title, salary, department_id) VALUES ("Marketing Executive", "18000", 4);
INSERT INTO roles (title, salary, department_id) VALUES ("Senior Marketing Executive", "24000", 4);
INSERT INTO roles (title, salary, department_id) VALUES ("Operations Manager", "60000", 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("Belcalis", "Almanzar", 1, NULL);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("Jermaine", "Cole", 2, NULL);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("Aubrey", "Graham", 3, NULL);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("Marshall", "Mathers", 4, NULL);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("Onika", "Miraj", 5, NULL);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("Shawn", "Carter", 6, NULL);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("Megan", "Pete", 7, NULL);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("Amala", "Dlamini", 8, NULL);

UPDATE employees SET manager_id = '4' WHERE (id = '3');
UPDATE employees SET manager_id = '7' WHERE (id = '6');
UPDATE employees SET manager_id = '5' WHERE (id = '4');